import { Component } from '@angular/core';

import { Todo } from './shared/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textHint = 'What needs to be done????';
  newTodoItemText = '';
  todos: Todo[] = [];

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
}
