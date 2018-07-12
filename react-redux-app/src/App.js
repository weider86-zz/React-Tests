import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import { clickButton2 } from './actions';
import './App.css';

class App extends Component {
  state = {
    titleValue: 'React App',
    inputValue: '',
    inputValue2: ''
  }
  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }
  inputChange2 = event => {
    this.setState({
      inputValue2: event.target.value
    })
  }
  render() {
    const {
      titleValueRedux,
      clickButton,
      newValue,
      newValue2
    } = this.props;
    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <h1>{ this.state.titleValue }</h1>
        <h1>{ this.state.titleValueRedux }</h1>
        <input onChange={this.inputChange} type='text' value={this.state.inputValue} />
        <button onClick={() => clickButton(this.state.inputValue)}>
          Button1
        </button>
        <p>{newValue}</p>
        <hr />
        <input onChange={this.inputChange2} type='text' value={this.state.inputValue2} />
        <button onClick={() => clickButton2(this.state.inputValue2)}>
          Button2
        </button>
        <p>{newValue2}</p>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue,
  newValue2: store.clickState.newValue2,
  titleValueRedux: store.clickState.titleValueRedux
});

const mapDispatchToProps = dispatch => bindActionCreators({ clickButton, clickButton2 }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);