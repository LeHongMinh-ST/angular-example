import {Component, Input} from '@angular/core';
import {Todo} from "../../models/todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  @Input('app-name') appName: string = '';

  todos: Todo[] = [];

  name: string = '';

  public createTodo(): void {
    const newTodo: Todo = {
      name: this.name,
      status: false
    }

    this.todos.push(newTodo)

    this.name = ''
  }
}
