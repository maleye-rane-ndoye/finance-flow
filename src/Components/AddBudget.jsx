import React, { useContext, useRef } from 'react'
import Params from './Params'
import BudgetList from './BudgetList'
import {v4 as uuidV4} from "uuid"
import { GlobalContext } from '../Context/GlobalStats';



export default function AddBudget() {

  const { addBudget } = useContext(GlobalContext);

  const categoryInputRef = useRef(null);


  function getCurrentDate() {
    const date = new Date();
    return date.toLocaleDateString() +' '+'T'+' '+ date.toLocaleTimeString();
  }


  function createBudget() {
    
    const id = uuidV4();
    const category = categoryInputRef.current.value;
    const transaction = '0';
    const date = getCurrentDate();

    addBudget({id, category, transaction, date})

    alert('New budget has been added!', id);

  }

  return (
    <>
      <Params/>
      <div className='AddBudget drop-shadow-2xl'>
            <h2>Add new Budget</h2>

        <div className='w-full h-auto flex flex-col space-y-6 p-4 items-center justify-center hover:drop-shadow-2xl rounded-3xl bg-slate-50'>
          
            <div className='form-control'>
                <label htmlFor="Name">Name</label>
                <input ref={categoryInputRef} type="text" placeholder='Enter your Budget Name' onKeyUp={(e) => { if (e.key === 'Enter') createBudget()}}/>
            </div>

            <button className=' bg-blue-300 p-3 rounded-lg text-white font-semibold hover:bg-blue-500' onClick={() => createBudget()}>Add Budget</button>

        </div>
        <div className=' w-full h-full overflow-auto'>
          <BudgetList/>
        </div>
    </div>
    </>
  )
}
