import axios from 'axios'
import dotenv from 'dotenv'
import fs from 'fs'
import { promisify } from 'util'

const writeFile = promisify(fs.writeFile)

dotenv.config({ path: `${__dirname}/../.env.i18n` })

const { SHEET_DB_URL, SHEET_DB_USERNAME, SHEET_DB_PASSWORD } = process.env as Record<string, string>
const TRANSLATION_KEY = 'Translation Key'

type Row = {
  [TRANSLATION_KEY]: string
  [key: string]: string
}

function toJSON(data: Record<string, string>) {
  return JSON.stringify(data, null, 2)
}

function toTS(key: string, data: Record<string, string>) {
  return `import { langVars } from '../types'

const ${key}: langVars = ${toJSON(data)}

export default ${key}`
}

async function fetchSpreadsheetData() {
  try {
    const { data: rows } = await axios.get<Row[]>(SHEET_DB_URL, {
      withCredentials: true,
      auth: { username: SHEET_DB_USERNAME, password: SHEET_DB_PASSWORD },
    })
    return rows
  } catch (error) {
    console.error('❗️ Error fetching spreadsheet data: ', error)
    process.exit(1)
  }
}

function parseRows(rows: Row[]) {
  const isLanguage = (col: string) => col.length === 2
  return rows.map(row =>
    Object.entries(row).reduce((acc, [key, value]) => {
      if (isLanguage(key) || key === TRANSLATION_KEY) {
        acc[key] = value
      }
      return acc
    }, {} as Row)
  )
}

function generateLanguageObjects(rows: Row[]) {
  const languages = {}

  rows.forEach(({ [TRANSLATION_KEY]: key, ...translations }) => {
    Object.entries(translations).forEach(([lang, str]) => {
      if (!languages[lang]) {
        languages[lang] = {}
      }
      const paths = key.split('.')
      paths.reduce((pointer, path, index, arr) => {
        const isLast = index === arr.length - 1

        if (!pointer[path]) {
          pointer[path] = isLast ? str : {}
        }

        return pointer[path]
      }, languages[lang])
    })
  })

  return languages
}

async function writeLanguageFiles(languages, format: 'json' | 'ts' = 'json') {
  const promises = Object.entries(languages).map(([lang, translations]) => {
    const path = `${__dirname}/languages/${lang.toLowerCase()}.${format}`
    let data
    if (format === 'json') {
      data = toJSON(translations as Record<string, string>)
    } else if (format === 'ts') {
      data = toTS(lang.toLowerCase(), translations as Record<string, string>)
    }

    return writeFile(path, data)
  })
  return promises
}

async function writeTypesFile(keys: string[]) {
  const path = `${__dirname}/types.ts`
  const typesData = keys.map(key => `${key}: string`).join('\n')
  const data = `export type langVars = {
    ${typesData}
  }
  `
  await writeFile(path, data)
}

function getTranslationKeys(rows: Row[]) {
  return Array.from(new Set(rows.map(row => row[TRANSLATION_KEY])))
}

async function writeTranslationFiles(rows: Row[]) {
  const parsedRows = parseRows(rows)
  const languages = generateLanguageObjects(parsedRows)
  const promises = await writeLanguageFiles(languages, 'json')
  await Promise.all(promises)
}

async function main() {
  console.log('📦 Fetching translations')
  const rows = await fetchSpreadsheetData()
  console.log('📝 Writing language files...')
  await writeTranslationFiles(rows)
  console.log('✅ Wrote language files!')
  // const translationKeys = getTranslationKeys(rows)
  console.log('📝 Writing types file...')
  // await writeTypesFile(translationKeys)
  console.log('✅ Wrote types file!')
  process.exit(0)
}

main()
