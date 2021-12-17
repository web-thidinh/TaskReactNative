import auth from '@react-native-firebase/auth'
import vanillaAxios from 'axios'
import env from '../config/env'

const axios = vanillaAxios.create({
  baseURL: env.api_url,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-app-version': '1.0.0',
  },
})

axios.interceptors.request.use(async config => {
  const newConf = config
  const user = auth().currentUser

  if (user) {
    // TODO: look into expiration time so we don't have to fetch token every time
    const token = await user.getIdToken()
    // newConf.headers.authorization = `Bearer ${token}`
  }

  return config
})

export default axios
