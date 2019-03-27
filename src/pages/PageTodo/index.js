import React, { Component } from 'react';
import './style.css';

// Import the data layers
import Stores from '../../stores';

// Import the components
import TodoList from '../../components/TodoList';

class PageTodo extends Component {
  render() {
    return (
      <div>
        <TodoList stores={Stores} />
      </div>
    );
  }
}

export default PageTodo;
