import React, {  createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state


const initialState = {
    transactions:[
        {id: 1, text: 'Food' ,Amount: -2000},
        {id: 2, text: 'Salary' ,Amount: 1000},
        {id: 3, text: 'Cinema' ,Amount: -1000},
        {id: 4, text: 'Rent' ,Amount: 3000},

    ]
}
// create context
export const GlobalContext = createContext(initialState);

//create provider component

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

        //  Actions

        function deleteTransaction(id){
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        }

        function addTransaction(transaction){
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            });
        }

        return(
            <GlobalContext.Provider value={{
                transactions: state.transactions,
                deleteTransaction,
                addTransaction

                
                }}>
                {children}
            </GlobalContext.Provider>
        )
}