'use strict';

console.log('CalculatorApp');

const arrBtnEqs = ["+", "-", "*", "/"],
arrBtnNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
arrEq = ['+'],
arrNumbers = [];

const Btn = React.createClass({
  render (){
    return (
      <button onClick={this.props.handleClick} value={this.props.name}>{this.props.name}</button>
    );
  }
});

const Display = React.createClass({
  render: function(){
    return (
    <div>
      <input type="text" value={this.props.displayValue} />
    </div>
    )
  }
});

const ListBox = React.createClass({
  render: function(){
    return (
    <div className={`grid-wrapper ${this.props.classElem}`}>
      {this.props.numbers}
    </div>
    )
  }
});

const BtnsEq = React.createClass({
  render: function(){
    var shelvesEqs = arrBtnEqs.map(function(number, index){
      return (
        <div className="grid-box">
          <Btn name={number} handleClick={this.props.handleClickEq} />
        </div>
      );
    }.bind(this));
    return (
      <ListBox numbers={shelvesEqs} classElem="list-eq" />
    )
  }
});

const BoxNumbers = React.createClass({
  render: function(){
    var shelvesNumbers = arrBtnNumbers.map(function(number, index){
      return (
        <div className="grid-box">
          <Btn name={number} handleClick={this.props.handleClickNumbers} />
        </div>
      );
    }.bind(this));
    return (
      <ListBox numbers={shelvesNumbers} classElem="list-numbers" />
    )
  }
});

const BtnsTotal = React.createClass({
  render: function(){
    return (
      <Btn name="=" handleClick={this.props.handleClickTotal} />
    )
  }
});

const BtnsClear = React.createClass({
  render: function(){
    return (
      <Btn name="C" handleClick={this.props.handleClickClear} />
    )
  }
});

const CalcApp = React.createClass({
    shouldComponentUpdate(nextProps, nextState) {
      console.log('nextState: ' + nextState);
      console.log('total: ' + this.state.total);
    },
    getInitialState: function() {
      return {
        displayValue: '',
        inputValue: '',
        inputEq: arrEq,
        inputNumbers: arrNumbers,
        total: ''
      }
    },
    handleClickNumbers: function(){
      console.log('handleClickNumbers');
      this.setState({
        inputNumbers: this.state.inputNumbers.concat(event.target.value),
        inputValue: this.state.inputValue.concat(event.target.value),
        displayValue: this.state.displayValue.concat(event.target.value),
        total: this.state.total += event.target.value
      });
      console.log('inputNumbers: ' + this.state.inputNumbers);
      console.log('inputValue: ' + this.state.inputValue);
      console.log('displayValue: ' + this.state.displayValue);
      console.log('total: ' + this.state.total);
    },
    handleClickEq: function(){
      console.log('handleClickEq');
      this.setState({
        inputValue: '',
        displayValue: this.state.displayValue.concat(this.state.inputEq),
        total: this.state.inputNumbers.concat(this.state.inputValue)
      });
      // console.log('inputValue: ' + this.state.inputValue);
      // console.log('displayValue: ' + this.state.displayValue);
      // console.log('inputNumbers: ' + this.state.inputNumbers);
      // console.log('total: ' + this.state.total);
    },
    handleClickTotal: function(){
      console.log('handleClickTotal');
      let sum = this.state.inputNumbers.reduce(function(a, b) {
        return parseFloat(a) + parseFloat(b);
      });
      this.setState({
        inputValue: '',
        displayValue: [sum],
        inputNumbers: [sum],
        total: [sum]
      })
    },
    handleClickClear: function(){
      console.log('handleClickClear');
      this.setState({
        displayValue: '',
        inputNumbers: ''
      })
    },
    render: function(){
      return (
        <div>
          <Display displayValue={this.state.displayValue}  />
          <BtnsClear handleClickClear={this.handleClickClear} />
          <BtnsEq handleClickEq={this.handleClickEq} />
          <BoxNumbers handleClickNumbers={this.handleClickNumbers}  />
          <BtnsTotal handleClickTotal={this.handleClickTotal} />
        </div>
      );
    }
});

React.render(<CalcApp />,  document.getElementById("app"));
