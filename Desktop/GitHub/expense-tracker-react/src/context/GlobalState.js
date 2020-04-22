// Where I am going to create the context
// Could later create a profile context/state

import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

// Initial State
const initialState = {
    transactions: []
}

// Create Context that will bring it into other components and files when needed
export const GlobalContext = createContext(initialState);

// Need to create a provider in order for other components to have access to the store 
// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions that will make calls to the reducer
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        { children }
    </GlobalContext.Provider>);
} 