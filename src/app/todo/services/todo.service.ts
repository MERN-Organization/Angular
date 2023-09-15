import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosList: string[] = [];
  constructor() {}

  addTodoServiceFunction(todoValue: string) {
    this.todosList = [...this.todosList, todoValue];
  }

  getTodoServiceFunction(): Observable<string[]> {
    return new Observable((subscriber) => subscriber.next(this.todosList));
  }
}
