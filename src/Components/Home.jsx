import React from 'react'
import Params from './Params'
import TransactionList from './TransactionList'
import IncomExpenses from './IncomExpenses'
import AddTransaction from './AddTransaction'
export default function Home() {
  return (
    <>
      <Params/>
      <div className='Home'>
       <IncomExpenses/>
       <TransactionList/>
       <AddTransaction/>
      </div>
    </>
  )
}
