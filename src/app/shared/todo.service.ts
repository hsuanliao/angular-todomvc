import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Todo } from './todo.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];

  private url = 'https://jsonbin.org/me/todomvc';
  private httpOptions = {
    headers: new HttpHeaders({
      'authorization': 'token 8d2eccb3-c68b-49e7-aa4c-3d1fb54dce13',
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private loggingService: LoggingService) {
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url, this.httpOptions)
      .pipe(
        tap(todos => this.loggingService.log(`get todos`)),
        catchError(this.loggingService.handleError(`getTodos`, []))
      );
  }

  saveTodos(newTodos): Observable<Todo[]> {
    return this.http.post<Todo[]>(this.url, newTodos, this.httpOptions)
      .pipe(
        tap(todos => this.loggingService.log(`saved todos`)),
        catchError(this.loggingService.handleError(`saveTodos`, []))
      );
  }
}
