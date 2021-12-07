import { combineReducers } from "redux"
import auth from './authReducer'
import atmData from './atmReducers'
const rootReducers = combineReducers({
    auth,atmData
})

export default rootReducers