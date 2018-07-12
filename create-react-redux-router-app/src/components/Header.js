import React, { Component } from 'react'
import logo from '../logo.svg';

export default class App extends Component {
  render() {
    return (
      <header className="App-header" style={{marginBottom: '20px'}}>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React & Redux & Router</h1>
      </header>
    )
  }
}