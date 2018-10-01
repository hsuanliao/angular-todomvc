import { Component } from '@angular/core';

import { Todo } from './shared/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint: string = 'What needs to be done?';
  todos: Todo[] = [
    new Todo('1', false),
    new Todo('2', true)
  ];
  newTodoItem: string;
  currentStatusFilterType: string = 'All';
  toggleAll: boolean = false;

  addNewTodoItem() {
    console.log('new todo is ' + this.newTodoItem);

    this.todos.push(new Todo(this.newTodoItem, false));
    this.newTodoItem = '';
  }

  onTodoItemEnterEditMode(item: Todo) {
    if (item.isDone) {
      return;
    }

    item.isEditMode = true;
  }

  onTodoItemLeaveEditMode(item: Todo) {
    item.isEditMode = false;
  }

  filterTodos(filterType: string) {
    switch (filterType.toLocaleLowerCase()) {
      case 'active':
        return this.todos.filter(item => !item.isDone);

      case 'completed':
        return this.todos.filter(item => item.isDone);

      default:
        return this.todos;
    }
  }

  onClearCompleted() {
    this.todos = this.todos.filter(
      item => !item.isDone
    );
  }

  onFilterTypeChanged(filterType: string) {
    this.currentStatusFilterType = filterType;
  }

  onToggleAllChanged() {
    this.todos.forEach(
      item => item.isDone = this.toggleAll
    );
  }

  onTodoItemStatusChanged() {
    this.toggleAll = this.todos.filter(item => !item.isDone).length === 0;
  }
}
