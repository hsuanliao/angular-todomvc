import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() todos: Todo[];
  // @Output() clearCompleted = new EventEmitter<void>();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onClearCompleted() {
    // this.clearCompleted.emit();
    this.todoService.clearCompleted.emit();
  }
}
