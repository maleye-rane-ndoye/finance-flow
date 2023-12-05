import React from 'react'
import Params from './Params'
import BudgetCard from './BudgetCard'
import ExpenseCard from './ExpenseCard'

export default function Home() {
  return (
    <>
      <Params/>
      <div className='Home '>
        <div className='flex flex-row '>
            <div className="Total drop-shadow-xl">
              <span class="material-symbols-rounded text-blue-600">add_box</span>
              <div className=' text-start'>
                  <span>$1200</span>
                  <p className=' text-xs truncate font-light'>Total income</p>
              </div>
            </div>

            <div className="Expense drop-shadow-xl">
              <span class="material-symbols-rounded text-red-600">do_not_disturb_on</span>
              <div className=' text-start'>
                  <span>$300</span>
                  <p className=' text-xs truncate font-light'>Expenses</p>
              </div>
            </div>
        </div>
       <BudgetCard/>
       <ExpenseCard/>
           
      </div>
    </>
  )
}
