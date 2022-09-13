import {combineReducers} from 'redux'
import  AuthReducer  from "./reducer";

const RootReducer = combineReducers({
    Auth: AuthReducer, 
})
export default RootReducer;















