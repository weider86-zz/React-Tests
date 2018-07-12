import React, { Component } from 'react'
import List from '../todoapp/List'

let localItemsStorage = localStorage.getItem("ReactToDoAppItems");
let localItems = localItemsStorage ? JSON.parse(localItemsStorage) : [];

export default class ToDoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: localItems
    };
  }
  componentDidMount() {
    console.log('componentDidMount_state-items: ', this.state.items);
  }
  componentWillUnmount() {
    alert('componentWillUnmount_state-items: ', this.state.items);
  }
  onChange = (event) => {
    this.setState({term: event.target.value});
  }
  onSubmit = (event) => {
    event.preventDefault()
    if(this.state.term !== "")
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }
  onRemoveTodo = (event) => {
    event.preventDefault()
    let itemToRemove = this.state.items[event.target.parentElement.id];
    let newItems = this.state.items;

    newItems = newItems.filter(function(item) { 
      return item !== itemToRemove
    })
    this.setState({
      items: newItems
    });
  }
  render() {
    localStorage.setItem("ReactToDoAppItems", JSON.stringify([...this.state.items]));
    return(
      <div>
        <h1>To Do List</h1>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List onRemove={(e) => this.onRemoveTodo(e)} items={this.state.items} />
      </div>
    )
  }
}