import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  constructor(private todoServiceInstance: TodoService) {}

  addTodo(form: NgForm) {
    this.todoServiceInstance.addTodoServiceFunction(
      form.form.value.todoContent
    );
  }
}
