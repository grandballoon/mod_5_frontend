import { logoutUser } from '../actions'
import React from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'


const Nav = (props) => {


  const logProps = () => {console.log(props.user.user.username)}
  return (
    <Button onClick={() => props.logoutUser(props.user.user.username)}>Log Out</Button>
  )
}

const mapStateToProps = (state) => {
  return {user: state.user}
}

export default connect(mapStateToProps, { logoutUser })(Nav)
