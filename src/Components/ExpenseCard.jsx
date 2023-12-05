import React from 'react'

export default function ExpenseCard() {
  return (
    
    <div className='ExpenseCard hover:drop-shadow-2xl'>
        <div>
        <span class="material-symbols-rounded text-blue-500 bg-blue-300 w-10 h-10 rounded-full flex flex-rox items-center justify-center ">outBox</span>
        </div>

        <div className='ExpenseCardId'>
            <span className=' text-xl font-semibold hover:text-blue-500'>Car expense</span>
            <span className=' text-sm font-light'>5/12/2023</span>
        </div>

        <div className=' flex flex-row items-center justify-center space-x-1'>
            <span className="material-symbols-rounded text-red-600">do_not_disturb_on</span>
            <span>$200</span>
        </div>
      
    </div>
  )
}
