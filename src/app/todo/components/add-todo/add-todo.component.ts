import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  constructor(
    private todoServiceInstance: TodoService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  addTodo(form: NgForm) {
    this.todoServiceInstance.addTodoServiceFunction(
      form.form.value.todoContent
    );

    this.toastr.success('Todo Added Successfully', 'Todo Added');
    this.resetForm(form);
  }

  resetForm(form: NgForm) {
    form.resetForm();
  }
}
