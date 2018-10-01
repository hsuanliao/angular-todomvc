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
}
