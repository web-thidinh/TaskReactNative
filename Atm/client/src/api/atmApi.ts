// const headers = {Authorization: `bearer ${token}`}
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async ()=>{
    const token = await AsyncStorage.getItem('Token')
    if(token){
        console.log(token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}` 
    }
}

const getAtms = async ()=>{
    const result = await axios.get('http://192.168.0.139:9999/api/atm/listAtms')
    return result.data.atm

    
}
const getQueue = async ()=>{
    const result = await axios.get('http://192.168.0.139:9999/api/atm/listQueue')
    return result.data.queue
}
const getProcess = async ()=>{
    const result = await axios.get('http://192.168.0.139:9999/api/atm/listProcess')
    return result.data.processedClient
}
const createAtm = async (data:string)=>{
    await axios.post('http://192.168.0.139:9999/api/atm/create',{name:data})
}
const createTrans = async (name:string,trans:string)=>{
    await axios.post('http://192.168.0.139:9999/api/atm/createTrans',{namePeople:name,transaction:trans})
}
const deleteAtm = async (atmId:string)=>{
    await axios.delete(`http://192.168.0.139:9999/api/atm/delete/${atmId}`)
}
export {getAtms,getQueue,getProcess,createAtm,createTrans,deleteAtm,getToken}