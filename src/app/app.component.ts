import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Todo } from './shared/todo.model';

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

  private url = 'https://jsonbin.org/me/todomvc';
  private httpOptions = {
    headers: new HttpHeaders({
      'authorization': 'token 8d2eccb3-c68b-49e7-aa4c-3d1fb54dce13',
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient) {
  }

  ngOnInit() {
    this.getTodos()
      .subscribe(todos => this.todos = todos);
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url, this.httpOptions)
      .pipe(
        tap(todos => this.log(`get todos`)),
        catchError(this.handleError(`getTodos`, []))
      );
  }

  saveTodos(): Observable<Todo[]> {
    const newTodos = [...this.todos];

    return this.http.post<Todo[]>(this.url, newTodos, this.httpOptions)
      .pipe(
        tap(todos => this.log(`saved todos`)),
        catchError(this.handleError(`saveTodos`, []))
      );
  }

  addNewTodoItem() {
    console.log('new todo is ' + this.newTodoItem);

    this.todos.push(new Todo(this.newTodoItem, false));
    this.newTodoItem = '';

    this.saveTodos()
      .subscribe(todos => this.todos = todos);
  }

  onTodoItemEnterEditMode(item: Todo) {
    if (item.isDone) {
      return;
    }

    item.isEditMode = true;
  }

  onTodoItemLeaveEditMode(item: Todo) {
    item.isEditMode = false;

    this.saveTodos()
      .subscribe(todos => this.todos = todos);
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

    this.saveTodos()
      .subscribe(todos => this.todos = todos);
  }

  onFilterTypeChanged(filterType: string) {
    this.currentStatusFilterType = filterType;
  }

  onToggleAllChanged() {
    this.todos.forEach(
      item => item.isDone = this.toggleAll
    );

    this.saveTodos()
      .subscribe(todos => this.todos = todos);
  }

  onTodoItemStatusChanged() {
    this.toggleAll = this.todos.filter(item => !item.isDone).length === 0;

    this.saveTodos()
      .subscribe(todos => this.todos = todos);
  }

  onRemoveTodoItem(item: Todo) {
    this.todos.splice(this.todos.indexOf(item), 1);

    this.saveTodos()
      .subscribe(todos => this.todos = todos);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
