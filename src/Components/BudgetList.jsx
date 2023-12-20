import React from 'react'
import { GlobalContext } from '../Context/GlobalStats'
import { useContext } from 'react'
import { Budget } from './Budget'

export default function BudgetList() {

    const { budgets } = useContext(GlobalContext)

  return (
    <ul>
        {budgets.map(budget => (<Budget key={budget.id} budget={budget} />))}
    </ul>
  )
}
