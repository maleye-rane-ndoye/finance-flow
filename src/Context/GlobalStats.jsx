import React, {  createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state


const initialState = {
    transactions:[
        {id: 1, name: 'meet' ,amount: -80, budgetId: 5},
        {id: 2, name: 'incom salary' ,amount: 2500, budgetId: 1},
        {id: 3, name: 'Basicfeet' ,amount: -19.99, budgetId: 2},
        {id: 4, name: 'Rent' ,amount: -500, budgetId: 3},
        {id: 5, name: 'Rent' ,amount: -79.99, budgetId: 4},
        {id: 6, name: 'Aperitif' ,amount: -500, budgetId: 5},



    ],

    budgets:[
        {id:1, category: 'Salary', date:"19/12/2023"},
        {id:2, category: 'Sport', date:"20/12/2023"},
        {id:3, category: 'House Rent', date:"21/12/2023"},
        {id:4, category: 'Transport', date:"22/12/2023"},
        {id:5, category: 'Alimentation', date:"13/12/2023"}



    ],

    graphData: [
        { name: 'Group A', value: 400 },
        
    ],
    graphTransactionData: [
        { name: 'Group A', value: 400 },
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

        function getCurrentGraphBudget() {
            // get a list of all budget name/categoris
            return state.budgets.map((budget) => (
                {
                    name: budget.category, 
                    value: getTotalTransaction(budget.id)

                })) // returns eg. [{ name: 'Group A', value: 0 }, ...]

            
        }


        function getCurrentGraphTransaction() {
            // get a list of all transactions name/amount/budgetName
            return state.transactions.map((transaction) => (
                {
                    name: transaction.name, 
                    value: transaction.amount,

                })) // returns eg. [{ name: 'Group A', value: 0 }, ...]

            
        }






        /**
         * Returns the budget using the given `budgetId`
         * 
         * @param { number } budgetId 
         * @returns { object } 
         */
        function getBudgetById(budgetId){
          let result = {};

          const budgetList = state.budgets.filter((budget) => budget.id === budgetId) // <- returns eg: [{..}]
          
          if (budgetList.length > 0) {
            result = budgetList[0];
          }

          return result;
        }


        /**
         * Returns a list of transactions using the given `budgetId`
         * 
         * @param { number } budgetId 
         * @returns { Array<object> } 
         */
        function getTransactionsByBudgetId(budgetId){
  
            return state.transactions.filter((transaction) => transaction.budgetId === budgetId) // <- returns eg: [{..}]
            
          }


        function getTotalTransaction(budgetId) {
            const transactionList = state.transactions.filter((transaction) => transaction.budgetId === budgetId);
            return transactionList.length;
        }
        
        
        function addBudget(budget){
            dispatch({
                type: 'ADD_BUDGET',
                payload: budget
            });
        }



        return(
            <GlobalContext.Provider value={{
                transactions: state.transactions,

                deleteTransaction,

                addTransaction,
                getBudgetById,

                budgets: state.budgets,
                deleteBudget,
                addBudget,

                getTotalTransaction,
                getTransactionsByBudgetId,

                getCurrentGraphBudget,
                getCurrentGraphTransaction,
                
                }}>
                {children}
            </GlobalContext.Provider>
        )
}