import React from 'react'
import { createUser } from '../actions'
import { Button, Form, Segment, Message, Loader, Dimmer } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

class SignupForm extends React.Component {
  state = {username: '', password: '', email: '', phoneNumber: ''}

  handleChange = (e, { name, value }) => {
    this.setState({[name]: value})
  }

  renderFormConditional = () => {
    if (this.props.authenticatingUser) {
      return (
        <Segment>
          <Dimmer active inverted>
            <Loader inverted>Signing Up...</Loader>
          </Dimmer>
          <Form>
            <Form.Input />
            <Form.Input />
            <Form.Input />
            <Form.Input />
            <Button>Sign Up</Button>
          </Form>
        </Segment>
      )
    } else {
      return (
        <Segment>
          <Form
            onSubmit={() => this.props.createUser(this.state.username, this.state.password, this.state.email, this.state.phoneNumber)}
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
                  label="phoneNumber"
                  placeholder="phone number"
                  name="phoneNumber"
                  onChange={this.handleChange}
                  value={this.state.phoneNumber}
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


  render(){
    return this.props.loggedIn ? (<Redirect to="/home" />) : this.renderFormConditional()
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
