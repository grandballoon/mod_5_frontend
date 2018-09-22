import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Provider } from 'react-redux'
// import store from './store'
import { connect } from 'react-redux'
import FactList from './components/FactList'
import AddFactForm from './components/AddFactForm'
import { syncStore } from './actions'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Test from './components/test'

class App extends Component {

  componentDidMount(){
    this.props.syncer()

  }

  render() {
    return (
        <React.Fragment>
          <Switch>
            <Route exact path="/home" component={FactList} />
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/test' component={Test} />
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
