import { logoutUser } from '../actions'
import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'


const Nav = (props) => {


  return (
    <Button onClick={logoutUser(props.user.username)}>Logout</Button>
  )
}

const mapStateToProps = (state) => {
  return {user: state.user}
}

export default connect(mapStateToProps)(Nav)
