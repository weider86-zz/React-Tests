import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';

class App extends Component {
  state = {
    titleValue: 'React App',
    inputValue: ''
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
      clickButton,
      newValue,
    } = this.props;
    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <h1>{ this.state.titleValue }</h1>
        <input onChange={this.inputChange} type='text' value={this.state.inputValue} />
        <button onClick={() => clickButton(this.state.inputValue)}>
          Button1
        </button>
        <p>{newValue}</p>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.counterState.newValue
});

const mapDispatchToProps = dispatch => bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);