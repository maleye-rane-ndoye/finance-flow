import React from 'react'
import Params from './Params'
import TransactionList from './TransactionList'
export default function AddBudget() {
  return (
    <>
      <Params/>
    <div className='AddBudget'>
      <TransactionList/>
    </div>
    </>
  )
}
