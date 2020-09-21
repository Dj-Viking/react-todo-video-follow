import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {

  state = {
    title: ''
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  onKeyInput = (event) => {
    this.setState(
      {
        //if we had several fields we can destructure several onchange events
        // whatever the name of the field is you can get the value of each field
        [event.target.name]: event.target.value
      }
    );
  }

  render () {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input 
          type="text" 
          name="title" 
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add Todo"
          autoComplete="off"
          value={this.state.title}
          onChange={this.onKeyInput}
        />
        <input 
          type="submit" 
          value="Submit" 
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo;