import { logoutUser } from '../actions'
import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'


const Nav = (props) => {


  if (props.loggedIn){
    return (
      <Button onClick={() => props.logoutUser(props.user.user.username)}>Log Out</Button>
    )
  }else {
    return null
  }
}

const mapStateToProps = (state) => {
  return {user: state.user, loggedIn: state.user.loggedIn}
}

export default connect(mapStateToProps, { logoutUser })(Nav)
