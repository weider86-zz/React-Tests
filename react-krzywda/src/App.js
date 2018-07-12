import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import MyPropsComponent from './MyPropsComponent';
import List from './List';
import DottedBox from './DottedBox';

class App extends Component {

  constructor(props) {
    super(props);
    console.log("constructor", "props: ", props);
    this.state = {
      isOn: true,
      term: '',
      items: [],
      clicks: 0,
      showClicksNumber: true,
      termAPI: '',
      imgAPI: ''
    };
  }

  toggle = () => {
    this.setState({isOn: !this.state.isOn})
  }

  onChangeTerm = (event) => {
    this.setState({ term: event.target.value });
  }

  //item
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }

  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  //term
  termSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  //SimpleAPI
  onChange = (event) => {
    this.setState({ termAPI: event.target.value });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    const api_key = 'dc6zaTOxFJmzC';
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.termAPI}&api_key=${api_key}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ term:'', img: data.data[0].images.fixed_height.url }))
      .catch(e => console.log('error', e));
  }

  /* LIFECYCLE */

  //MOUNTING
  componentWillMount() {
    // THIS GET FIRED BEFORE RENDER METHODS
    console.log("componentWillMount fired");
  }

  //MOUNTING
  componentDidMount() {
    // FOR setState AND FETCH DATA FOR API OR OUR JSON FILE
    console.log("componentDidMount fired");
  }

  //UPDATING
  componentWillReceiveProps(nextProps) {
    //WHEN COMPONENT WILL RECEIVE NEW PROPS FROM PARENT
    console.log("componentWillReceiveProps fired, nextProps:", nextProps);
  }

  //UPDATING
  shouldComponentUpdate(nextProps, nextState) {
    // LET REACT KNOW IF A COMPONENT'S OUTPUT IS NOT AFFECTED BY THE CURRENT CHANGE IN STATE/PROPS
    console.log("shouldComponentUpdate fired");
    return true;
  }

  //UPDATING
  componentWillUpdate(nextProps, nextState) {
    // WHEN THERE IS A CHANGE IN STATE AND THE COMPONENT WILL RE-RENDER AND CAN COMPARE NEW PROPS/STATE WITH CURRENT STATE/PROPS
    console.log(
      "componentWillUpdate, nextProps:",
      nextProps,
      " nextState:",
      nextState
    );
  }

  //UPDATING
  componentDidUpdate(prevProps, prevState) {
    //WHEN THE COMPONENT RE-RENDERED AND CAN COMPARE PREVIOUS PROPS/STATE WITH NEW STATE/PROPS
    console.log(
      "componentDidUpdate, prevProps:",
      prevProps,
      " prevState:",
      prevState
    );
  }

  /* //////////////// */

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Krzywda</h1>
        </header>

        <section>
          <h2>Simple Components</h2>
          <MyComponent />
          <MyPropsComponent name="Props" />
          <hr />
        </section>

      <section>
        <h2>On/Off</h2>
        <p>{this.state.isOn ? 'On' : 'Off'}</p>
        <button onClick={this.toggle}>
          {this.state.isOn ? 'On' : 'Off'}
        </button>
        <hr />
      </section>
    
        <section>
          <h2>List</h2>
          <form className="App" onSubmit={this.termSubmit}>
            <input value={this.state.term} onChange={this.onChangeTerm} />
            <button>Submit</button>
          </form>
          <List items={this.state.items} />
          <hr />
        </section>

        <section>
          <h2>Click Number</h2>
          <div>
            <button onClick={this.IncrementItem}>+ 1</button>
            <button onClick={this.DecreaseItem}>- 1</button>
            <button onClick={this.ToggleClick}>
              { this.state.show ? 'Hide' : 'Show' }
            </button>
            { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
          </div>
          <hr />
        </section>

        <section>
          <h2>Simple API</h2>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input value={this.state.termAPI} onChange={this.onChange} />
              <button>Search!</button>
            </form>
            <br />
            <img src={this.state.img} alt={this.state.termAPI} />
          </div>
        </section>

        <section>
          <h2>DottedBox</h2>
          <DottedBox />
        </section>

      </div>
    );
  }
}

export default App;
