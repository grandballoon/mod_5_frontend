import factReducer from './factReducer'
import userReducer from './userReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({fact: factReducer, user: userReducer})

export default rootReducer
