import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private http: HttpClient) {}

  getObservable() {
    return new Observable((subscriber) => {
      subscriber.next(Math.random());
    });
  }

  makeApiCall1(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  private apiResponseSubject = new Subject<any>();


  makeApiCall2(): Subject<any> {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(
        response => {
          this.apiResponseSubject.next(response);
        },
        error => {
          console.error('Error making API call:', error);
        }
      );

    return this.apiResponseSubject;
  }

  getApiResponseSubject(): Subject<any> {
    return this.apiResponseSubject;
  }
}
