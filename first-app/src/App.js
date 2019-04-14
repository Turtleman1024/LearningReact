import React, { Component } from 'react';
import Todo from './components/Todo';
import './App.css';

/*This is the main App Component*/
class App extends Component {
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
