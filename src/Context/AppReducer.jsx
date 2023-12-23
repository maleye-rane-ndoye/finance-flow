import React from 'react'

export default (state, action) => {


    switch(action.type){

        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)

            }
        case 'DELETE_BUDGET':
            return{
                ...state,
                budgets: state.budgets.filter(budget => budget.id !== action.payload),
                transactions: state.transactions.filter(transaction => transaction.budgetId !== action.payload),
            }    
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }    
        case 'ADD_BUDGET':
            return{
                ...state,
                budgets: [action.payload, ...state.budgets]
            }    
    
        default:
            return state;
    }

 

  
}
