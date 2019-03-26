import { observable } from 'mobx';

class TodoStore {
  @observable todos = ['Test Todo 1', 'Test Todo 2'];
  @observable filter = '';
};

export default new TodoStore();
