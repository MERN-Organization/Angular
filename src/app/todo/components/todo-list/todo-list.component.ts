import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoListData: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  currentClickedValue: string = '';

  constructor(private todoServiceInstance: TodoService) {}
  ngOnInit(): void {
    this.todoListData = this.todoServiceInstance.dataSubject$;
  }

  editTodo(todoValue: string) {
    this.currentClickedValue = todoValue;
  }
}
