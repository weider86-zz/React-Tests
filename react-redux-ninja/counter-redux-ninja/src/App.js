import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from './components/counter';

class App extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" width="100px" />
        <CounterContainer />
      </div>
    );
  }
}

export default App;
