import React from 'react'
import { GlobalContext } from '../Context/GlobalStats'
import { useContext } from 'react'

export default function IncomExpenses() {


  const { transactions } = useContext(GlobalContext)
  const amouts = transactions.map(transaction => transaction.Amount)


  const income = amouts
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0)* 1
  .toFixed(2)

  const expense = amouts
  .filter(item => item < 0)
  .reduce((acc, item) => (acc += item), 0)* -1
  .toFixed(2)


  return (
    <div className='IncomExpenses'>
       <div className='flex flex-row '>
            <div className="Total drop-shadow-xl">
              <span className="material-symbols-rounded text-blue-600">add_box</span>
              <div className=' text-start'>
                  <span className='hover:text-blue-500'>$ {income}</span>
                  <p className=' text-xs truncate font-light'>Total income</p>
              </div>
            </div>

            <div className="Expense drop-shadow-xl">
              <span className="material-symbols-rounded text-red-600">do_not_disturb_on</span>
              <div className=' text-start'>
                  <span className='hover:text-blue-500'>$ {expense}</span>
                  <p className=' text-xs truncate font-light'>Expenses</p>
              </div>
            </div>
        </div>

    </div>
  )
}
