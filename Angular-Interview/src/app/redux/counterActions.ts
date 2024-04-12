import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const loadCount = createAction('[Counter] Load Count');
export const loadCountSuccess = createAction('[Counter] Load Count Success', props<{ counter: number }>());
export const loadCountFailure = createAction('[Counter] Load Count Failure');