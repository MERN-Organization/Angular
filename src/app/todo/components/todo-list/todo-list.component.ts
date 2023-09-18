import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoListData: string[] = [];
  constructor(private todoServiceInstance: TodoService) {}

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo() {
    this.todoServiceInstance.getTodoServiceFunction().subscribe((observer) => {
      this.todoListData = observer;
    });
  }
}
