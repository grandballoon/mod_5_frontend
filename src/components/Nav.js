import { logoutUser } from '../actions'
import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'


const Nav = (props) => {


  if (props.loggedIn){
    return (
      <Menu className="Navbar" inverted>
        <Menu.Item className="Logo-text">Factoyd</Menu.Item>
        <Menu.Item position="right" onClick={() => props.logoutUser(props.user.user.username)}>Log Out</Menu.Item>
      </Menu>
    )
  }else {
    return null
  }
}

const mapStateToProps = (state) => {
  return {user: state.user, loggedIn: state.user.loggedIn}
}

export default connect(mapStateToProps, { logoutUser })(Nav)
