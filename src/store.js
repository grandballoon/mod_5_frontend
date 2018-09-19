import factReducer from './factReducer'
import { createStore } from 'redux'

const store = createStore(factReducer)
export default store
