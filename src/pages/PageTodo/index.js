import React, { Component } from 'react';
import './style.css';

// Import the data layers
import { TodoStore } from '../../stores';

// Import the components
import TodoList from '../../components/TodoList';

class PageTodo extends Component {
  render() {
    return (
      <div>
        <TodoList stores={TodoStore} />
      </div>
    );
  }
}

export default PageTodo;
