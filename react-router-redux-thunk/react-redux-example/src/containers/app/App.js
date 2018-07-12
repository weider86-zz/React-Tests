import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home/Home'
import About from '../about/About'
import ToDoApp from '../todoapp/ToDoApp'
import logo from '../../logo.svg'
import '../../App.css'

export default class App extends Component {
  render() {
    return(
      <div>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
          <Link to="/to-do-app">To Do</Link>
        </header>

        <main>
          <img src={logo} className="App-logo" alt="logo" />
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/to-do-app" component={ToDoApp} />
        </main>
      </div>
    )
  }
}