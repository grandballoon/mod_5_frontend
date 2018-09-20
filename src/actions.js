import { ADD_FACT, UPDATE_STORE } from './types'
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
