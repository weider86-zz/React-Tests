import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import DrawerLeft from './components/DrawerLeft';
import DottedBox from './components/DottedBox';
import CardAvatar from './components/CardAvatar';
import TextFieldSimple from './components/TextFieldSimple';
import FlatButtonSimple from './components/FlatButtonSimple';

// const App = () => (
//   <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
//     <AppBar title="React Material Menu" />
//     <DottedBox />
//   </MuiThemeProvider>
// );

class App extends Component {

  constructor(props) {
    super(props);
    console.log("constructor", "props: ", props);
    this.state = {
      open: false
    };
  }

  handleTouchMap() {
    this.setState({open: !this.state.open});
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit fired");
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
    console.log("componentWillUpdate, nextProps:", nextProps, " nextState:", nextState);
  }

  //UPDATING
  componentDidUpdate(prevProps, prevState) {
    //WHEN THE COMPONENT RE-RENDERED AND CAN COMPARE PREVIOUS PROPS/STATE WITH NEW STATE/PROPS
    console.log("componentDidUpdate, prevProps:", prevProps, " prevState:", prevState);
  }

  /* //////////////// */

  render() {
    return (

      <div className="App">

        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <AppBar title="React Material Menu" onLeftIconButtonTouchTap = { this.handleTouchMap.bind(this) } />
          <DrawerLeft open={this.state.open} />
        </MuiThemeProvider>
      
        <section>
          <h2>Simple API</h2>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input value={this.state.termAPI} onChange={this.onChange} />
              <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <TextFieldSimple />
              </MuiThemeProvider>
              <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <FlatButtonSimple />
              </MuiThemeProvider>
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

        <section>
          <h2>DottedBox</h2>
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <CardAvatar />
          </MuiThemeProvider>
        </section>

      </div>
    );
  }
}

export default App;