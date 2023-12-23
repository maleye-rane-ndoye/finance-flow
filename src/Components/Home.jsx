import React from 'react'
import Params from './Params'
import IncomExpenses from './IncomExpenses'
import BudgetList from './BudgetList'

export default function Home() {


  
  return (
    <>
      <Params/>
      <div className='Home'>
       <IncomExpenses/>
       <div className='w-full h-full overflow-auto'>
            <BudgetList/>
       </div>
      </div>
    </>
  )
}
