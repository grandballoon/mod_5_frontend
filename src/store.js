import factReducer from './factReducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(factReducer, applyMiddleware(thunk))
export default store
