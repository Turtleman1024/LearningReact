import React, { Component } from 'react';
import Todo from './components/Todo';
import './App.css';

/*This is the main App Component*/
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
  render() {
    return (
      <div className="App">
      {/*Embedding the Todo component*/}
        <Todo/>>
      </div>
    );
  }
}

export default App;
