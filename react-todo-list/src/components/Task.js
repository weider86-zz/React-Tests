import React, { Component } from 'react';

class Task extends Component {

  updateTodoClass() {
    return (this.props.done) ? 'task task-success' : 'task task-info';
  }

  render() {
    return (
      <div className={this.updateTodoClass()}>
        <i className="fa fa-check mark-done" onClick={this.props.markTaskDone}></i>
        <span>{this.props.value}</span>
        <i className="fa fa-times close" onClick={this.props.removeTask}></i>
      </div>
    );
  }

};

export default Task;