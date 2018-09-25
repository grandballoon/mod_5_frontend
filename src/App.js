import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Provider } from 'react-redux'
// import store from './store'
import { connect } from 'react-redux'
import FactList from './components/FactList'
import AddFactForm from './components/AddFactForm'
import Nav from './components/Nav'
import { syncStore } from './actions'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Test from './components/test'
import SignupForm from './components/SignupForm'

class App extends Component {

  componentDidMount(){
    this.props.syncer()

  }

  render() {
    return (
        <React.Fragment>
          <Route path="/" component={Nav} />
          <Switch>
            <Route path="/signup" component={SignupForm} />
            <Route exact path="/home" component={FactList} />
            <Route exact path='/login' component={LoginForm} />

          </Switch>
        </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    syncer: () => dispatch(syncStore())
  }
}

function mapStateToProps(state){
  return {facts: state.facts}
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
