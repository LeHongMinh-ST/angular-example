import {Component, Input} from '@angular/core';
import {Todo} from "../../models/todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input('todo') todoItem!: Todo

}
