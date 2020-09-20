import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  // getStyle = () => {
  //   if (this.props.todo.completed) {
  //     return {
  //       textDecoration: 'line-through'
  //     }
  //   } else {
  //     return {
  //       textDecoration: 'none'
  //     }
  //   }
  // }
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',  
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  //needs to be an arrow function or using bind to bind this to the TodoItem
  markComplete = (event) => {
    //console.log(this.props);
  }

  //render is a method extended from the Component class so it doesn't need to be an arrow function
  // so it can use 'this' keyword
  render() {

    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={ this.props.markComplete.bind(this, id /*this.props.todo.id */) } /> 
          {' '}
          { title /*this.props.todo.title */ }
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}


export default TodoItem;
