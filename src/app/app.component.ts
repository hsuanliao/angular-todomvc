import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textHint = 'What needs to be done????';

  addNewTodoItem() {
    console.log('add success!');
  }
}
