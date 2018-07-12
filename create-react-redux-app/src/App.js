import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  state = {
    inputValue: ''
  }
  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }
  render() {
    const {
      clickButton,
      newValue
    } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React & Redux</h1>
        </header>
        <div style={{ paddingTop: '10px' }}>
          <input onChange={this.inputChange}
            type='text' value={this.state.inputValue} />
          <button onClick={() => clickButton(this.state.inputValue)}>
            Click me!
          </button>
          <h1>{newValue}</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(App);