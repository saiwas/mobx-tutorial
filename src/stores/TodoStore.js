import { computed, observable } from 'mobx';

class TodoItem {
  @observable id;
  @observable value;
  @observable isCompleted;

  constructor(value) {
    this.value = value;
    this.id = Date.now();
    this.isCompleted = false;
  }
}
class TodoStore {
  @observable todos = [];
  @observable filter = '';

  @computed get filtedTodos() {
    const filterRex = new RegExp(this.filter, 'i');
    return this.todos.filter(todo => !this.filter || filterRex.test(todo.value));
  }

  createTodo(newTodo) {
    this.todos.push(new TodoItem(newTodo));
  }

  clearCompleted = () => {
    const unCompletedTodos = this.todos.filter(todo => !todo.isCompleted)
    this.todos = unCompletedTodos;
  }
};

export default new TodoStore();
