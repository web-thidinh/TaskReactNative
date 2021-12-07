import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
        isLoggedin:false,
        useremail:'',
        token:''
}
export interface IRootState{
    auth:{
        isLoggedin:Boolean,
        useremail:string,
        token:string
    },
    atmData:{
        ListAtm:[],
        ListQueue:[],
        ListProcessed:[]
    }
}
export interface ActionType{
    type:string,
    payload:{
        useremail:string,
        token:string
    }
}
const authReducer = async (state = initialState,action:ActionType)=>{
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                    isLoggedIn:true,
                    useremail:action.payload.useremail,
                    token:action.payload.token
            }
        default:
            return state
    }
}

export default authReducer