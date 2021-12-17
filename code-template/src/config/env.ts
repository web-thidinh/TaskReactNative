import Config from 'react-native-config'

// TODO: look into typing this in a react-native-config.d.ts file instead
type ConfigModel = {
  environment: string
  api_url: string
}

const env: ConfigModel = {
  api_url: Config.API_URL,
  environment: Config.ENVIRONMENT,
}

export default env
