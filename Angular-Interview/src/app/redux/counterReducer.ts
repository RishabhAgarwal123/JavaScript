import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './counterActions';

export interface CounterState {
    counter: number
}

export const initialState: CounterState = {
    counter: 0
}

export const countReducer = createReducer(
    initialState,
    on(CounterActions.increment, (state) => ({ ...state, counter: state.counter + 1})),
    on(CounterActions.decrement, (state) => ({ ...state, counter: state.counter - 1}))
)