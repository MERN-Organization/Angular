import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosList: string[] = [];

  // dataSubject = new Subject<string[]>();
  // data$ = this.dataSubject.asObservable();

  constructor() {}

  addTodoServiceFunction(todoValue: string) {
    this.todosList = [...this.todosList, todoValue];
  }

  getTodoServiceFunction(): Observable<string[]> {
    return new Observable((subscriber) => subscriber.next(this.todosList));
  }

  // getTodoServiceFunction(): Observable<string[]> {
  //   // @ts-ignore
  //  return this.dataSubject.next(this.todosList);
  // }
}
