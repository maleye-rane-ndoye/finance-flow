import React, { useState } from 'react'
import Transaction from './Transaction';

export const Budget = ({budget, totalTransaction, transactions, onDeleteButtonClick}) => {

 const [ expanded, setExpanded ] = useState(false);

 const trash = "material-symbols-rounded cursor-pointer text-slate-500 rounded-full flex flex-row items-center justify-center hover:bg-red-300"


  return (
    <li className='BudgetList hover:drop-shadow-2xl border-b-2' style={{ height: expanded && '400px' }}>

        {/* Budget Head */}
        <div onClick={(event) => (event.target === event.currentTarget) && setExpanded(!expanded)} className="BudgetHead flex w-full h-24 items-center ">
            <span onClick={onDeleteButtonClick}  className={trash}>close</span>
            <div className='flex flex-col text-start px-4 pointer-events-none select-none'>
                <span className='text-lg hover:text-blue-500'>{budget.category}</span>
                <span className='text-sm font-light truncate' title={budget.date}>{budget.date}</span>
            </div>

            <div className='flex flex-col flex-1 px-4 pointer-events-none select-none'>
                <span className='text-sm'>Transaction</span>
                <span className='text-sm font-light'>({totalTransaction})</span>
            </div>

            <button onClick={() => setExpanded(!expanded)}>
                <span className="material-symbols-rounded select-none cursor-pointer hover:scale-110 text-lg">{expanded ? 'expand_less' : 'expand_more'}</span>
            </button>

        </div>


        {/* Budget Body */}
        {expanded && (
            <ul className="BudgetBody flex flex-col grow w-full h-full overflow-auto">
                {transactions.map((transaction) => (
                    <Transaction 
                    key={transaction.id} 
                    className="!bg-transparent border-b-2 "
                    transaction={transaction} 
                    closeButtonHidden={true}
                  />
                ))}
            </ul>

        )}
      
    </li>
  )
}
