import { ADD_FACT, UPDATE_STORE } from '../types'

const initialFactState = {}

export default function factReducer(state=initialFactState, action) {
  switch(action.type){
    case ADD_FACT:
    return {...state, facts:[...state.facts, action.payload]}
    case UPDATE_STORE:
    return {...state, facts: action.payload}
    default:
    return state
  }
}
