import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textHint = 'What needs to be done????';
  newTodoItemText = '';
  todos: string[] = [];

  addNewTodoItem() {
    console.log('add success!' + this.newTodoItemText);
    this.todos.push(this.newTodoItemText);
    this.newTodoItemText = '';
  }
}
