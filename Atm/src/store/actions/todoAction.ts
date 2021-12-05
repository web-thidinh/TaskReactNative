import {Action} from '../reducers/todoReducer'
const add = (data:string) =>{
    return{
        type:'add',
        payload:data
    }
}
const remove = (data:Action)=>{
    return{
        type:'delete',
        payload:data
    }
}
const edit = (data:Action)=>{
    return{
        type:'edit',
        payload:data
    }
}
export {add,remove,edit}