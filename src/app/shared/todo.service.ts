import { Injectable, EventEmitter } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [
    new Todo('1', false),
    new Todo('2', true)
  ];

  clearCompleted = new EventEmitter<void>();

  constructor() { }

  getTodos() {
    return [...this.todos];
  }
}
