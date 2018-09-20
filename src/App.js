import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Provider } from 'react-redux'
// import store from './store'
import { connect } from 'react-redux'
import FactList from './components/FactList'
import AddFactForm from './components/AddFactForm'
import { syncStore } from './actions'

class App extends Component {

  componentDidMount(){
    // this.props.syncer()
    console.log("component mounted")
  }

  render() {
    return (
        <React.Fragment>
          <FactList />
          <AddFactForm />
        </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    syncer: () => dispatch(syncStore())
  }
}



export default connect(null, mapDispatchToProps)(App);
