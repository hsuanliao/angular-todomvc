import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from '../todo.model';

@Pipe({
  name: 'todoStatusFilter',
  // pure: false
})
export class TodoStatusFilterPipe implements PipeTransform {

  transform(todos: Todo[], statusFilterType?: string): any {
    switch (statusFilterType.toLocaleLowerCase()) {
      case 'active':
        return todos.filter(item => !item.isDone);

      case 'completed':
        return todos.filter(item => item.isDone);

      default:
        return todos;
    }
  }

}
