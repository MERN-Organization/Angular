import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('todoTemplateDrivenForm') todoTemplateForm: NgForm | undefined;

  constructor(
    private todoServiceInstance: TodoService,
    private toastr: ToastrService
  ) {}

  @Input('currentData') formValue: string = '';
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['formValue'].currentValue !== changes['formValue'].previousValue
    ) {
      this.todoTemplateForm?.form.setValue({
        todoContent: changes['formValue'].currentValue,
      });
    }
  }

  ngAfterViewInit(): void {}

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
