import React from 'react'
import { GlobalContext } from '../Context/GlobalStats'
import { useContext } from 'react'

export const Budget = ({budget}) => {

 const trash = "material-symbols-rounded cursor-pointer text-slate-500"

 const {deleteBudget} = useContext(GlobalContext)

  return (
    <li className='BudgetList hover:drop-shadow-2xl'>
       <span onClick={() => deleteBudget(budget.id)}  className={trash}>close</span>
        <div className='flex flex-col text-start px-4'>
            <span className='text-lg hover:text-blue-500'>{budget.category}</span>
            <span className='text-sm font-light'>{budget.Date}</span>
        </div>

        <div className='flex flex-col flex-1 px-4'>
            <span className='text-sm'>Transaction</span>
            <span className='text-sm font-light'>({budget.transaction})</span>
        </div>
        <div>
            <span class="material-symbols-rounded cursor-pointer hover:text-blue-300 text-lg">expand_more</span>
        </div>
      
    </li>
  )
}
