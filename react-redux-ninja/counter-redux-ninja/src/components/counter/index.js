import React, { Component } from 'react'
import Counter from '../counter/counter'



class CounterContainer extends Component {
  constructor(){
    super()
    this.state = {
      counter: 5
    }
  }

  increment = () =>  {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }
  // increment = () =>  {
  //   store.dispatch({ type: 'INCREMENT' })
  // }

  // decrement = () => {
  //   store.dispatch({ type: 'DECREMENT' })
  // }

  // componentDidMout () {
  //   store.subscript(() =>
  // }

  render() {
    return (
      <Counter counter={this.state.counter} increment={this.increment} decrement={this.decrement} />
    );
  }
}

export default CounterContainer;