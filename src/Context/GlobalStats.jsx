import React, {  createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state


const initialState = {
    transactions:[
        {id: 1, text: 'meet' ,amount: -8000},
        {id: 2, text: 'Diesel' ,amount: 1000},
        {id: 3, text: 'chooses' ,amount: -1000},
        {id: 4, text: 'Rent' ,amount: 3000},

    ],

    budgets:[
        {id:1, category: 'Alimentation',transaction:"8", Date:"19/12/2023"},
        {id:2, category: 'Care gaz',transaction:"5", Date:"20/12/2023"},
        {id:3, category: 'Shopping',transaction:"2", Date:"23/12/2023"},
        {id:4, category: 'House rent',transaction:"6", Date:"25/12/2023"},

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
        function deleteBudget(id){
            dispatch({
                type: 'DELETE_BUDGET',
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
                addTransaction,
                budgets: state.budgets,
                deleteBudget,
                
                }}>
                {children}
            </GlobalContext.Provider>
        )
}