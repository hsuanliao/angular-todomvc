import { Component, OnInit } from '@angular/core';

import { Todo } from './shared/todo.model';
import { TodoService } from './shared/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  textHint = 'What needs to be done????';
  newTodoItemText = '';
  todos: Todo[] = [];
  isToggleAll = false;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    this.todoService.clearCompleted
      .subscribe(() => this.onClearCompleted());
  }

  addNewTodoItem() {
    console.log('add success!' + this.newTodoItemText);
    const newItem = new Todo(this.newTodoItemText, false);
    this.todos.push(newItem);
    this.newTodoItemText = '';
  }

  editTodoItem(item: Todo) {
    item.isEdit = true;
  }

  viewTodoItem(item: Todo) {
    item.isEdit = false;
  }

  onClearCompleted() {
    this.todos = this.todos.filter(item => !item.isDone);
  }

  onToggleAll() {
    this.todos.forEach(item => item.isDone = this.isToggleAll);
  }

  onTodoItemStatusChanged() {
    this.isToggleAll = this.todos.filter(item => !item.isDone).length === 0;
  }

  onRemoveItem(item: Todo) {
    this.todos.splice(this.todos.indexOf(item), 1);
  }
}
