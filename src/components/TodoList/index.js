import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './style.css';

@observer
class TodoList extends Component {
  render() {
    return (
      <div className="Todo">
        <span className='Subject'>{this.props.stores.TodoStore.todos[0]}</span>
      </div>
    );
  }
}

export default TodoList;
