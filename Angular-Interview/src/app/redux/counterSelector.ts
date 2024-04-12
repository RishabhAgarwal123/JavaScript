import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CounterState } from './counterReducer';

export const selectCounterState = createFeatureSelector<CounterState>('counter');

export const selectCount = createSelector(
    selectCounterState,
    (state: CounterState) => state?.counter
);