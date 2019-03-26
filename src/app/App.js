import React, { Component } from 'react';
import './App.css';

// Import the data layers
import Stores from '../stores';

// Import the components
import TodoList from '../components/TodoList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <TodoList stores={Stores} />
      </div>
    );
  }
}

export default App;
