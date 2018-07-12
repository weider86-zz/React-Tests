import React, { Component } from 'react'

export default class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
      <ul className="list">
        {
          this.props.items.map((item, index) => <li key={index} id={index}>{item} <a className="list-remove" onClick={(e) => this.props.onRemove(e)}>x</a></li>)
        }
      </ul>
    </div>
    ) 
  }
}