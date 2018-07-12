import React, { Component } from 'react';

class TaskInput extends Component {

  render() {
    return (
      <form className="form-group col-xs-8 col-xs-offset-2 task-input" onSubmit={this.props.addTask}>
        <div className="input-group">
          <input type="text" name="task" value={this.props.inputValue} className="form-control" placeholder="Todo..." autocomplete="off" onChange={this.props.triggerChange} />
          <span className='input-group-btn'>
            <button className='btn btn-primary'>Add</button>
          </span>
        </div>
      </form>
    );
  }

};

export default TaskInput;