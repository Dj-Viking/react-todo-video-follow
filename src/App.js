import React, { Component } from 'react';
import Todos from './components/Todos.js';
import './App.css';

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

  render() {
    //console.log(this.state.todos);
    return (
      <div className="App">
      <Todos todos={this.state.todos} markComplete={ this.markComplete } />
      </div>
    );
  }
}
export default App;
