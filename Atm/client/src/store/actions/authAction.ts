import AsyncStorage from '@react-native-async-storage/async-storage';
interface IData{
    useremail:string,
    token:string
}
const login = async (data:IData)=>{
    const userStore = await AsyncStorage.getItem('currentUser')
    const tokenStore = await AsyncStorage.getItem('Token')
    if(userStore && tokenStore){
        data.useremail = JSON.parse(userStore)
        data.token = JSON.parse(tokenStore)
        return{
            type:'LOGIN',
            payload:data
        }
    }
}

export {login}