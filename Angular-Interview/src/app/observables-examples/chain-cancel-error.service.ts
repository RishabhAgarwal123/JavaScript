import { catchError, map, of } from "rxjs";

// Chaing sources
const source = of(1, 2, 3);
const chained = source.pipe(
    map(value => value * 2),
    catchError(error => {
        console.log('Error: ', error);
        return of('Error Occurred');
    })
)

const subscription = chained.subscribe({
    next: value => console.log(value),
    error: error => console.log(error),
    complete: () => console.log('Compleded')
})

setTimeout(() => {
    subscription.unsubscribe();
}, 1000);