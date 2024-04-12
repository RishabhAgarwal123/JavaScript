import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from "rxjs";

// Subject
const subject = new Subject<number>();
subject.next(1);
const sub1 = subject.subscribe(value => console.log('Sub1: ', value));
subject.next(2);
const sub2 = subject.subscribe(value => console.log(`Sub2: `, value));
subject.next(3);
sub1.unsubscribe();
sub2.unsubscribe();

// BehaviourSubject
const behaviorSubject = new BehaviorSubject<number>(0);
behaviorSubject.next(1);
behaviorSubject.subscribe(value => console.log('BehaviorSubject:', value));

// ReplaySubject
const replaySubject = new ReplaySubject<number>(2);
replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);
replaySubject.subscribe(value => console.log('ReplaySubject:', value));

// AsyncSubject
const asyncSubject = new AsyncSubject<number>();
asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);
asyncSubject.subscribe(value => console.log('AsyncSubject:', value));
asyncSubject.complete();