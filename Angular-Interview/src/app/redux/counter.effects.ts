import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as CounterActions from './counterActions';

@Injectable()
export class CounterEffects {

    loadCount$ = createEffect(() => this.actions$.pipe(
        ofType(CounterActions.loadCount),
        mergeMap(() => this.http.get<number>('/api/count')
            .pipe(
                map(count => CounterActions.loadCountSuccess({ count })),
                catchError(() => of(CounterActions.loadCountFailure()))
            )
        )
    ));

    constructor(
        private actions$: Actions,
        private http: HttpClient
    ) { }
}
