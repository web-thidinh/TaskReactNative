import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState={
   ListAtm:[],
   ListQueue:[],
   ListProcessed:[]
}
interface IAction{
    type:string,
    payload:{
        id:string,
        client:string,
        name:string,
        remove:Boolean,
        status:string,
        transaction:string
    }
}
const atmReducers = (state = initialState,action:IAction)=>{
    
    switch(action.type){
        case 'LIST_ATM':
            const listStore = action.payload
            return{
                ...state,
                ListAtm:listStore
            }
        case 'LIST_QUEUE':
            const listQueue = action.payload
            return{
                ...state,
                ListQueue:listQueue
            }
        case 'LIST_PROCESS':
            const listProcess = action.payload
            return{
                ...state,
                ListProcessed:listProcess
            }
        default:
            return state
    }
}

export default atmReducers