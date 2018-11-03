import { UPDATE_STORE, SET_CURRENT_USER, LOGOUT, ENTER_SEARCH, SET_CATEGORIES } from './types'



// FACT ACTIONS: These handle syncing the backend's fact collection to the store, adding a new fact to the backend (and syncing the store), and searching for facts in the search function

export function setStore(array){
  return {
    type: UPDATE_STORE,
    payload: array
  }
}

export function syncStore(){
  return (dispatch) => {
     fetch(process.env.FACTS_URL, {headers: {Authorization: `Bearer ${localStorage.getItem('jwt')}`}}).then(resp => resp.text()).then(console.log)

       // resp => resp.json()).then(facts => dispatch(setStore(facts)))
  }
}

export function fetchCategories(){
  return (dispatch) => {
    fetch(process.env.CAT_URL, {headers: {Authorization: `Bearer ${localStorage.getItem('jwt')}`}}).then(resp => resp.json()).then(categories => dispatch(setCategories(categories)))
  }
}

export function setCategories(array){
  return {
    type: SET_CATEGORIES,
    payload: array
  }
}

export function uploadFact(description, category, source){
  let factData = {"description": description, "category": category, "source": source}
  let configObj = {method: "POST", headers: {"Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem('jwt')}`}, body: JSON.stringify(factData)}

  return (dispatch) => {
    fetch(process.env.FACTS_URL, configObj).then(resp => resp.json()).then(data => dispatch(syncStore()))
  }
}

export function enterSearch(searchTerm){
  return {
    type: ENTER_SEARCH,
    payload: searchTerm
  }
}

// LOGIN AND SIGNUP ACTIONS: These handle the action of signing up or logging in a user, and authenticating the user against the JWT stored in local storage

export const loginUser = (username, password) => {
  return (dispatch) => {
    fetch(process.env.LOGIN_URL, {
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

export const createUser = (username, password, email, phoneNumber) => {
  return (dispatch) => {
    dispatch(authenticatingUser())
    fetch(process.env.USERS_URL,{
      method: "POST",
      headers: {"Content-Type": "application/json", Accept: "application/json"},
      body: JSON.stringify({user: {"username": username, "password": password, "email": email, "phone_number": phoneNumber}})
    })
    .then (response => {
      if (response.ok) {
        return response.json()
      } else {
        throw response
      }
    })
    .then(resp => dispatch(loginUser(username, password)))
    .catch(r => r.json().then(e => dispatch(failedLogin(e.error))))
  }
}

export const logoutUser = (username) => {
  return (dispatch) => {
    fetch(process.env.LOGOUT_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({user: {"username": username}})
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw response
      }
    })
    // .then(console.log)


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
    fetch(process.env.PROFILE_URL, {
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

// REMINDER ACTIONS: These handle the process of creating a reminder chain in the backend and adding a fact to a user's learned facts

export const subscribe = (userId, factId) => {
  return (dispatch) => {
    fetch(process.env.SUBSCRIBE_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem('jwt')}`},
    body: JSON.stringify({"user_id": userId, "fact_id": factId})
    })
    .then(resp => dispatch(fetchCurrentUser()))
    }
}
