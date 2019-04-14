import React, { Component } from 'react';
import Todo from './components/Todos';
import './App.css';

/*npm run start */
/*This is the main App Component*/
/*https://www.youtube.com/watch?v=sBws8MSXN7A&t=810s
  
*/
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Learn React',
        completed: false
      },
      {
        id: 2,
        title: 'Learn Redux',
        completed: false
      },
      {
        id: 3,
        title: 'Learn Sages',
        completed: false
      }
    ]
  }

  // This toggle complete
  toggleComplete = (id) => {
    this.setState( {todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })});
  }

  render() {
    return (
      <div className="App">
      {/*Embedding the Todo component*/}
      {/*Passing todos as a prop to the todo component*/}
        <Todo todos={this.state.todos} toggleComplete={this.toggleComplete}/>
      </div>
    );
  }
}

export default App;
