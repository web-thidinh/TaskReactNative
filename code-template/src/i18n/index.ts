import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as RNLocalize from 'react-native-localize'
import en from './languages/en.json'
import sv from './languages/sv.json'
import xx from './languages/xx.json'

export const resources = {
  en: {
    translation: en,
  },
  sv: {
    translation: sv,
  },
  xx: {
    translation: xx,
  },
}

const lng = RNLocalize.findBestAvailableLanguage(Object.keys(resources)).languageTag

i18n.use(initReactI18next).init({
  resources,
  lng,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
