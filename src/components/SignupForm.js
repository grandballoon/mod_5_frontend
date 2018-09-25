import React from 'react'
import { createUser } from '../actions'
import { Button, Form, Segment, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

class SignupForm extends React.Component {
  state = {username: '', password: '', email: ''}

  handleChange = (e, { name, value }) => {
    this.setState({[name]: value})
  }


  render(){
    return this.props.loggedIn ? (<Redirect to="/home" />) : (
      <Segment>
        <Form
          onSubmit={() => this.props.createUser(this.state.username, this.state.password, this.state.email)}
          size="mini"
          key="mini"
          loading={this.props.authenticatingUser}
          error={this.props.failedLogin}
          >
          <Message error header={this.props.failedLogin ? this.props.error : null} />
            <Form.Group widths="equal">
              <Form.Input
                label="email"
                placeholder="email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
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
            <Button type="submit">Sign Up</Button>
          </Form>
          <p>Already have an account? <Link to="/login">Log in here</Link></p>
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

export default connect(mapStateToProps, { createUser })(SignupForm)
