import React from 'react'

export default function BudgetCard() {
  return (
    <div className='BudgetCard hover:drop-shadow-2xl'>
        <div>
        <span class="material-symbols-rounded text-blue-500 bg-blue-300 w-10 h-10 rounded-full flex flex-rox items-center justify-center">move_to_inbox</span>
        </div>

        <div className='BudgetCardId'>
            <span className=' max-w-10 text-xl font-semibold hover:text-blue-500 truncate'>Extra-work</span>
            <span className=' text-sm font-light'>5/12/2023</span>
        </div>

        <div className=' flex flex-row items-center justify-center space-x-1'>
            <span class="material-symbols-rounded text-blue-600">add_box</span>
            <span>$200</span>
        </div>
      
    </div>
  )
}
