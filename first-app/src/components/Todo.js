import React, { Component } from 'react';
import TodoItem from './TodoItem';

/*This is the main App Component*/
class Todo extends Component {
  render() {
    return this.props.todos.map((todos) => (
        /*Passing the current todos array item to TodoItem props*/
        /*Map needs to have a unquie key*/
        <TodoItem key={todos.id} todos={todos}/>
    ));
  }
}

export default Todo;