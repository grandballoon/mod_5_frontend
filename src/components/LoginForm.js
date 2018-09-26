import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { loginUser } from '../actions'
import { Button, Form, Segment, Message } from 'semantic-ui-react'

class LoginForm extends React.Component {
  state = {username: '', password: ''}



  handleChange = (e, { name, value }) => {
    this.setState({[name]: value})
  }

  handleLoginSubmit = () => {
    console.log(this.state.username, this.state.password)
    this.props.loginUser(this.state.username, this.state.password)
    this.setState({username: '', password: ''})
  }

  render() {
    return this.props.loggedIn ? (<Redirect to="/home" />) : (
      <Segment>
        <Form
          onSubmit={this.handleLoginSubmit}
          size="mini"
          key="mini"
          loading={this.props.authenticatingUser}
          error={this.props.failedLogin}
          >
          <Message error header={this.props.failedLogin ? this.props.error : null} />
          <Form.Group widths="equal">
            <Form.Input
              label="username"
              placeholder="username"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <Form.Input
              type="password"
              label="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
        </Form.Group>
        <Button type="submit">Login</Button>
        </Form>
        <p>New to Factoyd? <Link to='/signup'>Sign up here.</Link></p>
      </Segment>
    )
  }
}

const mapStateToProps = ({ user: {authenticatingUser, failedLogin, error, user, loggedIn} } ) => ({
  authenticatingUser,
  failedLogin,
  error,
  user,
  loggedIn
})

export default connect(mapStateToProps, { loginUser })(LoginForm)
