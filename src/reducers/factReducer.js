import { ADD_FACT, UPDATE_STORE, ENTER_SEARCH } from '../types'

const initialFactState = {facts: [], searchTerm: ''}

export default function factReducer(state=initialFactState, action) {
  switch(action.type){
    case ADD_FACT:
    return {...state, facts:[...state.facts, action.payload]}
    case UPDATE_STORE:
    return {...state, facts: action.payload}
    case ENTER_SEARCH:
    return {...state, searchTerm: action.payload}
    default:
    return state
  }
}
