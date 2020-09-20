import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos.js';
import './App.css';
import AddTodo from './components/AddTodo.js';
import Header from './components/layout/Header.js';
import About from './components/pages/About.js';
//uuid doesn't have an export default syntax embedded in the package
const uuid = require('uuid');

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
    this.setState(
      {
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      }
    );
  }

  addTodo = (title) => {
    // console.log(title);
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState(
      {
        todos: [...this.state.todos, newTodo]
      }
    );
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
