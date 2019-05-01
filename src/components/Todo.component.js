import React from 'react';

import { connect } from 'react-redux';
import { fetchTodoList } from '../actions';

class Todo extends React.Component {

  handleClick = (event) => {
    fetch('https://jsonplaceholder.typicode.com/todos', { mode: 'cors' })
      .then(response => response.json())
      .then(response => this.props.fetchDone(response))
      .catch(error => console.error('Error:', error));
  }

  createTodoList = () => {
    return this.props.todoList.map((todo, idx) => {
      return (
        <li key={idx}>{todo.title}</li>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Handling async by using thunk middleware</h1>
        <h2>Todo Fetch</h2>
        <input type='button' value="Fetch TodoList" onClick={() => this.handleClick()} />
        <h2>Todo List Details</h2>
        { this.props.todoList !== null ? 
          <ul>
            {this.createTodoList()}
          </ul> : <div>List is empty</div>
        }
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchDone: (response) => dispatch(fetchTodoList(response))
  }
}

function mapStateToProps(state) {
  return {
    todoList: state.todoList
  }
}

// export default connect(null, mapDispatchToProps)(Todo);
export default connect(mapStateToProps, mapDispatchToProps)(Todo);