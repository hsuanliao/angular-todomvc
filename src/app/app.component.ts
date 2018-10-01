import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint: string = 'What needs to be done?';
  todos: string[] = [];
  newTodoItem: string;

  addNewTodoItem() {
    console.log('new todo is ' + this.newTodoItem);

    this.todos.push(this.newTodoItem);
    this.newTodoItem = '';
  }
}
