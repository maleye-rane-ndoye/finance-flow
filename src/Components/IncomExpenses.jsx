import React from 'react'

export default function IncomExpenses() {
  return (
    <div className='IncomExpenses'>
       <div className='flex flex-row '>
            <div className="Total drop-shadow-xl">
              <span className="material-symbols-rounded text-blue-600">add_box</span>
              <div className=' text-start'>
                  <span className='hover:text-blue-500'>$1200</span>
                  <p className=' text-xs truncate font-light'>Total income</p>
              </div>
            </div>

            <div className="Expense drop-shadow-xl">
              <span className="material-symbols-rounded text-red-600">do_not_disturb_on</span>
              <div className=' text-start'>
                  <span className='hover:text-blue-500'>$300</span>
                  <p className=' text-xs truncate font-light'>Expenses</p>
              </div>
            </div>
        </div>

    </div>
  )
}
