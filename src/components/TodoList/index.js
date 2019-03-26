import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './style.css';

@observer
class TodoList extends Component {

  filterChangeHandler = (e) => {
    this.props.stores.TodoStore.filter = e.target.value;
  }

  createTodo = (e) => {
    if (e.which === 13) {
      this.props.stores.TodoStore.createTodo(e.target.value);
      e.target.value = '';
    }
  }

  toggleComplete = (todo) => {
    todo.isCompleted = !todo.isCompleted;
  }

  render() {
    const { clearCompleted, filter, filtedTodos } = this.props.stores.TodoStore;
    const todoList = filtedTodos.map(todoItem => {
      return (
        <li key={todoItem.id}>
          <input type='checkbox' onChange={() => {this.toggleComplete(todoItem)}} />{todoItem.value}
        </li>
      )
    });

    return (
      <div className="Todo">
        <h1>This is a Todo List</h1>
        <input className='AddToDo' onKeyUp={this.createTodo}/>
        <input className='Filter' value={filter} onChange={this.filterChangeHandler}/>
        <ul>
          {todoList}
        </ul>

        <a href='#' onClick={clearCompleted}>Clear Complete Todos</a>
      </div>
    );
  }
}

export default TodoList;
