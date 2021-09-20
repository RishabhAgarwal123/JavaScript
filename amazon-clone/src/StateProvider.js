import React, { createContext, useReducer } from 'react'
import { useContext } from 'react';
import reducer from './reducer';

const initialState = {
    cart: []
}

const StateContext = createContext();

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (title) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: title
        })
    }

    return (
        <StateContext.Provider value={{ ...state, addToCart }}>
            {children}
        </StateContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(StateContext);
}

export { StateProvider, StateContext };