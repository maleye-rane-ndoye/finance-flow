import React from 'react'
import Params from './Params'
import TransactionList from './TransactionList'
import BudgetList from './BudgetList'
export default function AddBudget() {
  return (
    <>
      <Params/>
    <div className='AddBudget'>
      <BudgetList/>
    </div>
    </>
  )
}
