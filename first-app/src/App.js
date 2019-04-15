import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todo from './components/Todos';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AddTodo from './components/AddTodo';
import About from './components/Pages/About';
//import uuid from 'uuid';
import './App.css';
import axios from 'axios';

/*npm run start */
/*This is the main App Component*/
/*https://www.youtube.com/watch?v=sBws8MSXN7A&t=810s

  Website that allows for a back in supporters.
  Must run npm install axios
  https://jsonplaceholder.typicode.com/
*/
class App extends Component {
  state = {
    todos: []
  }

  componentDidMount(){
    //Limit the number of todos that we get to 10
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({ todos: res.data}))
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]
     }));
  }

  //Add Todo
  addTodo = (title) => {
    //Mimics a post
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data]}));
    //Now add to our state
    ;
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
