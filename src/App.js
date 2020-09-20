import React, { Component } from 'react';
import Todos from './components/Todos.js';
import './App.css';
import AddTodo from './components/AddTodo.js';
import Header from './components/layout/Header.js';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Code stuff',
        completed: false
      },
      {
        id: 2,
        title: 'Code more stuff',
        completed: false
      },
      {
        id: 3,
        title: 'Code a lot more stuff',
        completed: false
      },
    ]
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
      id: 4,
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
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos 
            todos={this.state.todos} 
            markComplete={ this.markComplete } 
            delTodo={this.delTodo}
          />
        </div>  
      </div>
    );
  }
}
export default App;
