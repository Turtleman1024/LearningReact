import React, { Component } from 'react';


/*This is the main App Component*/
class Todo extends Component {
  render() {
    return this.props.todos.map((todos) => (
        <h3>{ todos.title}</h3>
    ));
  }
}

export default Todo;