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
                budgets: state.budgets.filter(budget => budget.id !== action.payload)
            }    
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }    

        default:
            return state;
    }



  
}
