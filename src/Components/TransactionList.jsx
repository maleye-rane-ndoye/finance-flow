import React from 'react'
import { GlobalContext } from '../Context/GlobalStats'
import { useContext } from 'react'

export default function TransactionList() {
  return (
    <ul>
          <li className='TransactionList hover:drop-shadow-2xl'>
              <div>
                <span class="material-symbols-rounded text-blue-500 bg-blue-300 w-10 h-10 rounded-full flex flex-rox items-center justify-center">move_to_inbox</span>
              </div>
              <div className='transaction'>
                  <span className=' max-w-10 text-xl font-semibold hover:text-blue-500 truncate'>Extra-work</span>
                  <span className=' text-sm font-light'>5/12/2023</span>
              </div>

              <div className=' flex flex-row items-center justify-center space-x-1'>
                  <span class="material-symbols-rounded text-blue-600">add_box</span>
                  <span>$200</span>
              </div>
          </li>
    </ul>
   
    //    <div className='ExpenseCard hover:drop-shadow-2xl'>
    //    <div>
    //    <span class="material-symbols-rounded text-blue-500 bg-blue-300 w-10 h-10 rounded-full flex flex-rox items-center justify-center ">outBox</span>
    //    </div>

    //    <div className='ExpenseCardId'>
    //        <span className=' text-xl font-semibold hover:text-blue-500'>Car expense</span>
    //        <span className=' text-sm font-light'>5/12/2023</span>
    //    </div>

    //    <div className=' flex flex-row items-center justify-center space-x-1'>
    //        <span className="material-symbols-rounded text-red-600">do_not_disturb_on</span>
    //        <span>$200</span>
    //    </div>
    
    // </div>

  )
}
