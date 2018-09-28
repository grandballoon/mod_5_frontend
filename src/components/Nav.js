import { logoutUser } from '../actions'
import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import AddFactModal from './AddFactModal'


const Nav = (props) => {


  if (props.loggedIn){
    return (
      <Menu className="Navbar" inverted>
        <Menu.Item className="Logo-text">Factoyd</Menu.Item>
        <Menu.Menu position="right">
          <AddFactModal />
          <Menu.Item onClick={() => props.logoutUser(props.user.user.username)}>Log Out</Menu.Item>
        </Menu.Menu>
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
