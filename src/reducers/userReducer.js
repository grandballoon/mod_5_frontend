import { SET_CURRENT_USER, AUTHENICATING_USER, AUTHENTICATED_USER, FAILED_LOGIN, LOGOUT } from '../types'


const defaultState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null
}

const userReducer = (state=defaultState, action) => {
  switch(action.type){
    case SET_CURRENT_USER:
      return { ...state, user: action.payload, loggedIn: true, authenticatingUser: false }
    case AUTHENICATING_USER:
      return {...state, authenticatingUser: true}
    case AUTHENTICATED_USER:
      return {...state, authenticatingUser: false}
    case FAILED_LOGIN:
      return {
        ...state,
        failedLogin: true,
        error: action.payload,
        authenticatingUser: false
        }
    case LOGOUT:
      return defaultState
    default:
      return state
  }
}

export default userReducer
