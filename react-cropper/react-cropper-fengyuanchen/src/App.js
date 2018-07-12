import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Crop from './components/Crop/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Crop src='https://fengyuanchen.github.io/cropperjs/images/picture.jpg' />
      </div>
    );
  }
}

export default App;
