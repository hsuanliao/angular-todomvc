import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() clearCompleted = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onClearCompleted() {
    this.clearCompleted.emit();
  }
}
