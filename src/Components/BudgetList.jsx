import React from 'react'
import { GlobalContext } from '../Context/GlobalStats'
import { useContext } from 'react'
import { Budget } from './Budget'

export default function BudgetList() {

    const { 
      budgets, 
      getTotalTransaction, 
      deleteBudget,
      getTransactionsByBudgetId,

    } = useContext(GlobalContext);

    
  return (
    <ul className="flex flex-col w-full h-auto items-center justify-start py-8 px-0 lg:px-8">
        {budgets.map(budget => (
          <Budget 
            key={budget.id} 
            budget={budget} 
            transactions={getTransactionsByBudgetId(budget.id)}
            totalTransaction={getTotalTransaction(budget.id)}
            onDeleteButtonClick={() => (prompt('Enter "yes" to delete this budget and all transactions') === "yes") && deleteBudget(budget.id)}
          />
        ))}
    </ul>
  )
}
