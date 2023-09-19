import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';

@Component({
  selector: 'app-observable-vs-subject',
  templateUrl: './observable-vs-subject.component.html',
  styleUrls: ['./observable-vs-subject.component.css'],
})
export class ObservableVsSubjectComponent implements OnInit {
  // testArrayVar: any = [];
  // newValue: any = [];

  observableVar1: any;
  observableVar2: any;
  subjectVar1: any;
  subjectVar2: any;

  constructor(private testServiceInstance: TestService) {}

  ngOnInit(): void {
   
    this.testServiceInstance.makeApiCall2().subscribe((subscriber) => {
      console.log('Subject: First subscriber');
      this.subjectVar1 = subscriber;
    });

    this.testServiceInstance.makeApiCall2().subscribe((subscriber) => {
      console.log('Subject: Second subscriber');
      this.subjectVar2 = subscriber;
    });
  }

  startObservable() {
    // let observable = new Observable((observer) => {
    //   console.log('Observable: Subscribe ran');
    //   observer.next(Math.random());
    // });

    this.testServiceInstance.makeApiCall1().subscribe((subscriber) => {
      console.log('Observable: First subscriber', subscriber);
      this.observableVar1 = subscriber;
    });

    this.testServiceInstance.makeApiCall1().subscribe((subscriber) => {
      console.log('Observable: Second subscriber');
      this.observableVar2 = subscriber;
    });
  }

  startSubject() {
    // this.testServiceInstance.makeApiCall2()
  }

  // startObservable() {
  //   let observable = new Observable((observer) => {
  //     console.log('Observable: Subscribe ran');
  //     observer.next(Math.random());
  //   });

  //   observable.subscribe((subscriber) => {
  //     console.log('Observable: First subscriber');
  //     this.observableVar1 = subscriber;
  //   });

  //   observable.subscribe((subscriber) => {
  //     console.log('Observable: Second subscriber');
  //     this.observableVar2 = subscriber;
  //   });
  // }

  // startSubject() {
  //   let subject = new BehaviorSubject(0);

  //   subject.subscribe((subscriber) => {
  //     console.log('Subject: First subscriber');
  //     this.subjectVar1 = subscriber;
  //   });

  //   subject.subscribe((subscriber) => {
  //     console.log('Subject: Second subscriber');
  //     this.subjectVar2 = subscriber;
  //   });
  //   subject.next(Math.random());
  // }
}
