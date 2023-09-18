import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  dataSubject$ = new BehaviorSubject<string[]>([]);

  constructor() {}

  addTodoServiceFunction(todoValue: string) {
    const todoList = [...this.dataSubject$.getValue(), todoValue];
    this.dataSubject$.next(todoList);
  }
}
