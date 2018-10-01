import { Component, OnInit, Input } from '@angular/core';

import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() activeTodos: Todo[];

  constructor() { }

  ngOnInit() {
  }

}
