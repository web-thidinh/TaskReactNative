import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    listTodo:[]
}
export interface Item{
    id:string,
    job:string
}
export interface IRootState{
    todos:{
        listTodo:Item[]
    }
}
export interface Action{
    type:string,
    payload:{
        id:string,
        jobEdited:string
    }
}
const todoList = async (state = initialState,action:Action)=>{
    const value = await AsyncStorage.getItem('todos')
    if(value){
        state.listTodo = JSON.parse(value)
    }
    switch(action.type){
        case 'add':
            const nTodo = [...state.listTodo,{
                id:Date.now(),
                job:action.payload
            }]
            AsyncStorage.setItem('todos',JSON.stringify(nTodo))
            return{
                ...state,
                listTodo:nTodo
            }
        case 'delete':
            const list = [...state.listTodo].filter((item:Item)=>(item.id != action.payload.id))
            AsyncStorage.setItem('todos',JSON.stringify(list))
            return{
                ...state,
                listTodo:list
            }
        case 'edit':
            const listEdited = state.listTodo.map((item:any)=>{
                if(item.id == action.payload.id){
                    return{
                        id:action.payload.id,
                        job:action.payload.jobEdited
                    }
                }
                else{
                    return item
                }
            })
            console.log(listEdited)
            AsyncStorage.setItem('todos',JSON.stringify(listEdited))
            return{
                ...state,
                listTodo:listEdited
            }
        default:
            return state
    }
}

export default todoList