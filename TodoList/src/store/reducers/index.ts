import { combineReducers } from "redux"
import todos from './todoReducer'
const rootReducers = combineReducers({
    todos,
})

export default rootReducers