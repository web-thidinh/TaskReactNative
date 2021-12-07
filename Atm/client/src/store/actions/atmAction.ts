

const listAtms = (data:any)=>{
    return{
        type:'LIST_ATM',
        payload:data
    }
}
const listQueue = (data:any)=>{
    return{
        type:'LIST_QUEUE',
        payload:data
    }
}
const listProcess = (data:any)=>{
    return{
        type:'LIST_PROCESS',
        payload:data
    }
}
export {listAtms,listQueue,listProcess}