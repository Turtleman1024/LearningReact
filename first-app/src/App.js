import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todo from './components/Todos';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AddTodo from './components/AddTodo';
import About from './components/Pages/About';
import uuid from 'uuid';
import './App.css';

/*npm run start */
/*This is the main App Component*/
/*https://www.youtube.com/watch?v=sBws8MSXN7A&t=810s
*/
class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Learn React',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Learn Redux',
        completed: false
      },
      {
        id: uuid.v4(),
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

  //Delete an item Todos
  delTodo = (id) => {
    this.setState({
       todos: [...this.state.todos.filter(todo => todo.id !== id)]
      });
  }

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      //Could do just 
      //title,
      title: title,
      completed: false
    }
    //Now add to our state
    this.setState({ todos: [...this.state.todos, newTodo]});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
              {/*Embedding the Todo component*/}
              {/*Passing todos as a prop to the todo component*/}
              <Header/>
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo}/>
                  <Todo todos={this.state.todos} toggleComplete={this.toggleComplete} delTodo={this.delTodo}/>           
                </React.Fragment>
              )} />
              <Route path="/about" component={About} />
              <Footer/>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
