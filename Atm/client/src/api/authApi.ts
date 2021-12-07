import axios from 'axios'

export interface LoginData{
    useremail:string,
    userpassword:string
}

const loginApi = async (data:LoginData)=>{
    const result = await axios.post('http://192.168.0.139:9999/api/auth/login',data)
    return result.data
}

const registerApi = async (data:LoginData)=>{
    const result = await axios.post('http://192.168.0.139:9999/api/auth/register',data)
    return result.data
}

export {loginApi,registerApi}