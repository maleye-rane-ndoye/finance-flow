import React, {  createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state


const initialState = {
    transaction:[
        {id: 1, text: 'Food' ,Amount: -20},
        {id: 2, text: 'Salary' ,Amount: 1000},
        {id: 3, text: 'Cinema' ,Amount: -10},
        {id: 4, text: 'Rent' ,Amount: 300},

    ]
}
// create context
export const GlobalContext = createContext(initialState);

//create provider component

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);


        return(
            <GlobalContext.Provider value={{transaction: state.transaction}}>


                {children}
            </GlobalContext.Provider>
        )
}