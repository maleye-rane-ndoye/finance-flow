import React from 'react'

export const Transaction = ({transaction}) => {

    const sign = transaction.Amount < 0 ? '-': '+';
    const color = transaction.Amount < 0 ? 'text-blue-300' : 'text-red-600'
    const date = new Date()
  return (
    
        <li className='TransactionList hover:drop-shadow-2xl'>
                <div>
                <span className="material-symbols-rounded text-blue-500 bg-blue-300 w-10 h-10 rounded-full flex flex-rox items-center justify-center"> {transaction.Amount < 0 ? 'outBox':'move_to_inbox'}</span>
                </div>
                <div className='transaction'>
                    <span className=' max-w-10 text-xl font-semibold hover:text-blue-500 truncate'>{transaction.text}</span>
                    <span className=' text-sm font-light'>{date}</span>
                </div>

                <div className=' flex flex-row items-center justify-center space-x-1'>
                    <span className={'material-symbols-rounded'}> {transaction.Amount < 0 ? 'do_not_disturb_on':'add_box'}</span>
                    <span>{sign}${Math.abs(transaction.Amount)}</span>
                </div>
        </li>
      


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
