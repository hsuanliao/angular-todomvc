import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() activeTodos: Todo[];
  @Output() clearCompleted = new EventEmitter<void>();
  filterType: string = 'All';
  @Output() filterTypeChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClearCompleted() {
    this.clearCompleted.emit();
  }

  onFilterTypeChanged(filterType: string) {
    this.filterType = filterType;
    this.filterTypeChanged.emit(filterType);
  }
}
