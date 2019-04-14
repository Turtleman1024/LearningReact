import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

/*This is the main App Component*/
class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
        /*Passing the current todos array item to TodoItem props*/
        /*Map needs to have a unquie key*/
        <TodoItem key={todo.id} todo={todo}/>
    ));
  }
}

//PropTypes
Todos.propType = {
    todos: PropTypes.array.isRequired
}

export default Todos;