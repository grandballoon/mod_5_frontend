import React from 'react'
import { Button } from 'semantic-ui-react'
import { enterSearch } from '../actions'
import { connect } from 'react-redux'

const CategoryButton = (props) => {



  return (
    <Button basic style={{color: "#F26157"}} onClick={() => props.enterSearch(props.category.name)}>{props.category.name}</Button>
  )

}
//
// const mapDispatchToProps = dispatch => {
//   return {search: (term) => dispatch(enterSearch(term))}
// }

export default connect(null, { enterSearch })(CategoryButton)
