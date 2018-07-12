import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.props.counter}</h2>
        <button onClick={this.props.decrement}>-</button>
        <button onClick={this.props.increment}>+</button>
      </div>
    );
  }
}

export default Counter;