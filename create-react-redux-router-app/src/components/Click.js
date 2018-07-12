import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from '../actions';

class Click extends Component {
  state = {
    inputValue: ''
  }
  
  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  }

  clickButtonClass(e){
    e.preventDefault();
    console.log('classe', this.state.inputValue);
    let {clickButton} = this.props;
    clickButton(this.state.inputValue);
  }

  componentWillMount() {
    console.log('componentWillMount()');
  }

  render() {
    const {
      newClickValue
    } = this.props;
    console.log(newClickValue);
    return(
      <div>
        <h1>Click</h1>
        <div style={{ paddingTop: '10px' }}>
          <input onChange={this.inputChange}
            type='text' value={this.state.inputValue} />
          <button onClick={(e) => this.clickButtonClass(e)}>
            Click me!
          </button>
          <h2>{newClickValue}</h2>
        </div>
    </div>
    )
  }
}

const mapStateToProps = store => ({
  newClickValue: store.clickState.newClickValue
});

const mapDispatchToProps = dispatch => bindActionCreators({ clickButton }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Click);
