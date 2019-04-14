import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

/*This is the main App Component*/
class Todos extends Component {
  //Yet again we cannot do this here we have to go up one more level to
  //App.js 
  /* toggleComplete = (e) => {

  } */
  render() {
    return this.props.todos.map((todo) => (
        /*Passing the current todos array item to TodoItem props*/
        /*Map needs to have a unquie key*/
        <TodoItem key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} delTodo={this.props.delTodo} />
    ));
  }
}

//PropTypes
Todos.propType = {
    todos: PropTypes.array.isRequired
}

export default Todos;