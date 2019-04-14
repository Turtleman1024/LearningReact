import React, { Component } from 'react'

export class TodoItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.todos.title}</p>
      </div>
    )
  }
}

export default TodoItem
