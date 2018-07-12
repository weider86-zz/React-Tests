import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { counterButtonIncrementAction } from '../../actions';
import { counterButtonDecrementAction } from '../../actions';
// import Counter from './counter'

class CounterContainer extends Component {
  state = {
    counter: 1
  }

  counterButtonIncrementClass(e){
    e.preventDefault();
    console.log('counterButtonIncrementClass: ', this.state.counter)
    this.setState({
      counter: this.state.counter + 1
    })
    let {counterButtonIncrementAction} = this.props;
    counterButtonIncrementAction(this.state.counter);
  }

  counterButtonDecrementClass(e){
    e.preventDefault();
    console.log('counterButtonDecrementClass: ', this.state.counter)
    this.setState({
      counter: this.state.counter - 1
    })
    let {counterButtonDecrementAction} = this.props;
    counterButtonDecrementAction(this.state.counter);
  }

  componentWillMount() {
    console.log('componentWillMount()');
  }

  render() {
    const {
      newCounterValue
    } = this.props;
    console.log(newCounterValue);
    return (
      // <Counter counter={this.state.counter} increment={this.increment} decrement={this.decrement} />
      <div>
        <h1>Counter</h1>
        <button onClick={(e) => this.counterButtonIncrementClass(e)}>+</button>
        <button onClick={(e) => this.counterButtonDecrementClass(e)}>-</button>
        <h2>{newCounterValue}</h2>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newCounterValue: store.countState.newCounterValue
});

const mapDispatchToProps = dispatch => bindActionCreators({ counterButtonIncrementAction, counterButtonDecrementAction }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);