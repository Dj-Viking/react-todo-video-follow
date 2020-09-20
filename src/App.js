import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos.js';
import './App.css';
import AddTodo from './components/AddTodo.js';
import Header from './components/layout/Header.js';
import About from './components/pages/About.js';
import axios from 'axios';
//uuid doesn't have an export default syntax embedded in the package
//const uuid = require('uuid');

class App extends Component {
  state = {
    // todos: [
    //   {
    //     id: uuid.v4(),
    //     title: 'Code stuff',
    //     completed: false
    //   },
    //   {
    //     id: uuid.v4(),
    //     title: 'Code more stuff',
    //     completed: false
    //   },
    //   {
    //     id: uuid.v4(),
    //     title: 'Code a lot more stuff',
    //     completed: false
    //   },
    // ]
    todos: []
  }

  //life cycle methods

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users/1/todos?_limit=10')
    .then(
      res => {
        console.log(res.data);
        this.setState(
          {
            todos: res.data
          }
        );
      }
    )
    .catch(error => console.log(error));
  }

  //behaves like a toggle
  markComplete = (id) => {
    //console.log(id);
    this.setState(
      { 
        todos: this.state.todos.map(todo => {
          if(todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo;
        }) 
      }
    );
  }

  delTodo = (id) => {
    //console.log(id);
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(
      res => {
        this.setState(
          {
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
          }
        );
      }
    )
    .catch(error => console.log(error));
  }

  addTodo = (title) => {
    // console.log(title);
    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos'
    , {
      title,
      completed: false
    })
    .then(
      res => {
        this.setState(
          {
            todos: [...this.state.todos, res.data]
          }
        );
      }
    )
    .catch(error => console.log(error));
  }

  render() {
    //console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" 
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos 
                    todos={this.state.todos} 
                    markComplete={ this.markComplete } 
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )} 
            />
            <Route path="/about"
              component={About}
            />
          </div>  
        </div>
      </Router>
    );
  }
}
export default App;
