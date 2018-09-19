import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import FactList from './components/FactList'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <FactList />
        </div>
      </Provider>
    );
  }
}

export default App;
