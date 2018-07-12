import React, { Component } from 'react';
import Task from './Task';
import TaskInput from './TaskInput';

class TodoList extends Component {

  getInitialState() {
    return{
      todos: this.loadTasks(),
      inputValue: ''
    };
  }
  
  loadTasks() {
    return [
        {value : 'Learn JavaScript', done: false },
        {value : 'Buy Milk', done: true },
        {value : 'Learn React', done: false }
      ]
  }
  
  renderTasks() {
    var todos = this.state.todos.map(function (task, index) {
      return(
        <Task
        key={index}
        value={task.value}
        done={task.done}
        markTaskDone={this.markTaskDone.bind(this, index)}
        removeTask={this.removeTask.bind(this, index)}
      /> )
    }.bind(this));

    return todos;
  }
  
  markTaskDone(index) {
    var todos = this.state.todos;
    var task = todos[index];

    todos.splice(index,1);
    task.done = !task.done;

    task.done ? todos.push(task) : todos.unshift(task);

    this.setState({
      todos: todos
    });
  }
  
  triggerChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  addTask(e) {
    e.preventDefault();

    var todos = this.state.todos;

    todos.push({
      value: this.state.inputValue,
      done: false
    });

    this.setState({
      todos: todos,
      inputValue: ''
    })
  }

  removeTask(index) {
    this.state.todos.splice(index, 1);

    this.setState({
      todos: this.state.todos
    });
  }

    render() {
      return (
      <div className="col-xs-6 col-xs-offset-3 todo-list">
        <h1 className="title">My Awesome TodoList</h1>
        {this.renderTasks()}
        <TaskInput
        inputValue={this.state.inputValue}
        addTask={this.addTask}
        triggerChange={this.triggerChange}
        />
      </div>
      )
    }
  };

export default TodoList;