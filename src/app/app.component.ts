import { Component, OnInit } from '@angular/core';

import { Todo } from './shared/todo.model';
import { TodoService } from './shared/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inputHint = 'What needs to be done?';
  // todos: Todo[] = [
  //   new Todo('1', false),
  //   new Todo('2', true)
  // ];
  todos: Todo[] = [];
  newTodoItem: string;
  currentStatusFilterType = 'All';
  toggleAll = false;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos()
      .subscribe(todos => this.todos = todos);
  }

  saveTodos() {
    const newTodos = [...this.todos];
    this.todoService.saveTodos(newTodos)
      .subscribe(todos => this.todos = todos);
  }

  addNewTodoItem() {
    console.log('new todo is ' + this.newTodoItem);

    this.todos.push(new Todo(this.newTodoItem, false));
    this.newTodoItem = '';

    this.saveTodos();
  }

  onTodoItemEnterEditMode(item: Todo) {
    if (item.isDone) {
      return;
    }

    item.isEditMode = true;
  }

  onTodoItemLeaveEditMode(item: Todo) {
    item.isEditMode = false;

    this.saveTodos();
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

    this.saveTodos();
  }

  onFilterTypeChanged(filterType: string) {
    this.currentStatusFilterType = filterType;
  }

  onToggleAllChanged() {
    this.todos.forEach(
      item => item.isDone = this.toggleAll
    );

    this.saveTodos();
  }

  onTodoItemStatusChanged() {
    this.toggleAll = this.todos.filter(item => !item.isDone).length === 0;

    this.saveTodos();
  }

  onRemoveTodoItem(item: Todo) {
    this.todos.splice(this.todos.indexOf(item), 1);

    this.saveTodos();
  }
}
