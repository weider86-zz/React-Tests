'use strict';

const TodoItem = React.createClass({
  render: function(){
    return(
      <li className="todo-item">
        <span className="todo-text"> {this.props.todo}</span>
        <span className="delete" onClick={this.props.handleRemove.bind(null, this.props.index)}> [x] </span>
      </li>
    );
  }
});

const ListUnorder = React.createClass({
  render: function () {
    return (
      <ul className="todo-list"> {this.props.itens} </ul>
    )
  }
});

const ListOrder= React.createClass({
  render: function () {
    return (
      <ol className="todo-list"> {this.props.itens} </ol>
    )
  }
});

const TodoList = React.createClass({
  render: function(){
    var shelves = this.props.shelves.map(function(todo, index){
      return <TodoItem key={index} todo={todo} index={index} handleRemove={this.props.handleRemove} />
    }.bind(this));
    return (
      <ListOrder itens={shelves}/>
    );
  }
});

const FormFields = React.createClass({
  render: function(){
    return(
      <form>
        <div className="form-group">
          <label for="whatodo">What To Do?</label>
          <p className="writing"><small>{this.props.bag}</small></p>
          <input type="text" id="whatodo" className="form-control" placeholder="Just do it" value={this.props.bag} onChange={this.props.handleChange} />
        </div>
        <input type="button" className="btn btn-default" onClick={this.props.removeAll} value="Remove All" />
        <input type="button" className={`btn btn-primary ${this.props.classElem}`} onClick={this.props.handleClick} value="Add To Do" />
      </form>
    );
  }
});

const TodoApp = React.createClass({

    getInitialState: function(){
      return {
        shelves: [],
        bag: '',
        classElem: null
      }
    },

    handleChange: function(event){
      this.setState({
        bag: event.target.value
      });
    },

    handleClick: function(){
      this.setState({
        shelves: this.state.shelves.concat([this.state.bag]),
        bag: '',
        classElem: 'btn-success'
      });
      if(this.state.shelves.length >= 4) {
        this.setState({
          classElem: 'btn-danger'
        });
      }
    },

    removeAll: function(){
      this.setState({
        shelves: [],
        bag: '',
        classElem: ''
      });
    },

    handleRemove: function(index){
      var newshelves = this.state.shelves.slice();
      newshelves.splice(index,1);
      this.setState({
        shelves: newshelves
      });
      if(this.state.shelves.length <= 5) {
        this.setState({
          classElem: ''
        });
      }
    },

    render: function(){
      return (
        <div>
          <FormFields bag={this.state.bag} classElem={this.state.classElem} removeAll={this.removeAll} handleClick={this.handleClick} handleChange={this.handleChange} />
          <TodoList shelves={this.state.shelves} handleRemove={this.handleRemove} />
        </div>
      );
    }
});

React.render(<TodoApp />,  document.getElementById("app"));
