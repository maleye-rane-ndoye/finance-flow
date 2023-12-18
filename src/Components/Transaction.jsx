import React from 'react'
import { GlobalContext } from '../Context/GlobalStats';
import { useContext } from 'react';

export const Transaction = ({transaction}) => {

    const sign = transaction.Amount < 0 ? '-': '+';
    const color = transaction.Amount < 0 ? 'material-symbols-rounded text-red-600' : 'material-symbols-rounded text-blue-600'
    const trash = "material-symbols-rounded cursor-pointer text-slate-500"

    const {deleteTransaction} = useContext(GlobalContext)
  return (
    
        <li className='TransactionList hover:drop-shadow-2xl'>
                <span onClick={() => deleteTransaction(transaction.id)} className={trash}>close</span>
                <div>
                <span className="material-symbols-rounded text-blue-500 bg-blue-300 w-10 h-10 rounded-full flex flex-rox items-center justify-center"> {transaction.Amount < 0 ? 'outBox':'move_to_inbox'}</span>
                </div>
                <div className='transaction'>
                    <span className=' max-w-10 text-xl font-semibold hover:text-blue-500 truncate'>{transaction.text}</span>
                    <span className=' text-sm font-light'>11/12/2023</span>
                </div>

                <div className=' flex flex-row items-center justify-center space-x-1'>
                    <span className={color}> {transaction.Amount < 0 ? 'do_not_disturb_on':'add_box'}</span>
                    <span>{sign}${Math.abs(transaction.Amount)}</span>
                </div>
        </li>
  )
}
