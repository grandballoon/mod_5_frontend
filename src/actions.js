import { ADD_FACT, UPDATE_STORE, SET_CURRENT_USER, AUTHENICATING_USER, AUTHENTICATED_USER, FAILED_LOGIN, LOGOUT } from './types'
import UUID from 'uuid'


// export function uploadFact(description, category, source){
//   return {
//     type: ADD_FACT,
//     payload: {
//       id: UUID(),
//       description,
//       category,
//       source,
//       disputes: [],
//       verified: false
//     }
//   }
// }

export function setStore(array){
  return {
    type: UPDATE_STORE,
    payload: array
  }
}

export function syncStore(){
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/facts').then(resp => resp.json()).then(facts => dispatch(setStore(facts)))
  }
}

export function uploadFact(description, category, source){
  let factData = {"description": description, "category": category, "source": source}
  let configObj = {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(factData)}

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/facts', configObj).then(resp => resp.json()).then(data => dispatch(syncStore()))
  }
}

export const loginUser = (username, password) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/login', {
      method: "POST",
      headers: {"Content-Type": "application/json", Accept: "application/json"},
      body: JSON.stringify({user: {"username": username, "password": password}})
    })
    .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
      .then(({ user, jwt }) => {
        localStorage.setItem('jwt', jwt)
        dispatch(setCurrentUser(user))
      })
      .catch(r => r.json().then(e => dispatch(failedLogin(e.message))))
  }
}

export const logoutUser = (username) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/logout', {
      method: "POST",
      headers: {"Content-Type": "application/json", Accept: "application/json"},
      body: JSON.stringify({user: {"username": username}})
    })
    .then(response => {
      console.log(response)
      // if (response.ok) {
      //   return response.json()
      // } else {
      //   throw response
      // }
    })
    .then(message => {
      localStorage.removeItem('jwt')
      dispatch({type:LOGOUT})
    })
    .catch(r => r.json().then(e => console.log(e.message)))
  }
}

export const fetchCurrentUser = () => {
  return (dispatch) => {
    dispatch(authenticatingUser())
    fetch('http://localhost:3000/api/v1/profile', {
      method: "GET",
      headers: {Authorization: `Bearer ${localStorage.getItem('jwt')}`}
    })
    .then(resp => resp.json())
    .then(({ user }) => dispatch(setCurrentUser(user)))
  }
}

export const setCurrentUser = (userData) => ({
  type: SET_CURRENT_USER,
  payload: userData
})

export const failedLogin = (errorMsg) => ({
  type: 'FAILED_LOGIN',
  payload: errorMsg
})

export const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' })
