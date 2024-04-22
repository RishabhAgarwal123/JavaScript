import React, { useReducer } from 'react';

const initialState = [];
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'REMOVE_TODO':
            return state.filter((todo) => todo !== action.payload);
        default:
            throw new Error();
    }
};

function TodoList() {
    // useReducer is used as an alternative to useState for managing complex state logic. It works similarly to Redux, with a 
    // reducer function that determines the new state based on the current state and an action.
    const [state, dispatch] = useReducer(reducer, initialState);

    const addTodo = (todo) => {
        dispatch({ type: 'ADD_TODO', payload: todo });
    };

    const removeTodo = (todo) => {
        dispatch({ type: 'REMOVE_TODO', payload: todo });
    };

    return (
        <div>
            <button onClick={() => addTodo('New Task')}>Add Todo</button>
            <ul>
                {state.map((todo, index) => (
                    <li key={index}>
                        {todo} <button onClick={() => removeTodo(todo)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
