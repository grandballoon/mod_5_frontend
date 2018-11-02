import React, { Component } from 'react';
import './App.css';
// import { Provider } from 'react-redux'
// import store from './store'
import { connect } from 'react-redux'
import FactList from './components/FactList'
import { syncStore } from './actions'
import { Route, Switch, withRouter } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import './semantic/dist/semantic.min.css';

class App extends Component {

  componentDidMount(){
    this.props.syncer()


  }

  render() {
    return (
        <React.Fragment>
          <Route exact path="/" component={LoginForm} />
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
