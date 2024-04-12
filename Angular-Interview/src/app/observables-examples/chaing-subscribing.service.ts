import { Observable } from "rxjs";

const observable = new Observable<number>(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 1000)
})

const subscription = observable.subscribe({
    next: value => console.log(value),
    error: error => console.log(error),
    complete: () => console.log('Completed')
})

setTimeout(() => {
    subscription.unsubscribe();
}, 1500);