import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { homeButtonAction } from '../actions';

class Home extends Component {
  
  componentWillMount() {
    console.log('componentWillMount()');
  }

  render() {
    const {
      newHomeValue
    } = this.props;
    console.log(newHomeValue);
    return(
      <div>
        <h1>Home</h1>
        <div style={{ paddingTop: '10px' }}>
          <h2>{newHomeValue}</h2>
        </div>
    </div>
    )
  }
}

const mapStateToProps = store => ({
  newHomeValue: store.homeState.newHomeValue
});

const mapDispatchToProps = dispatch => bindActionCreators({ homeButtonAction }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);
