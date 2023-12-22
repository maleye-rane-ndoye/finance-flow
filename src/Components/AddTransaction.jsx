import React, { useContext } from 'react'
import { useState, useRef } from 'react'
import { GlobalContext } from '../Context/GlobalStats'
import {v4 as uuidV4} from "uuid"
import Params from './Params'
import TransactionList from './TransactionList'
import { NavLink } from 'react-router-dom'





export default function AddTransaction() {
  
  const[name, setName]= useState('')
  const[amount, setamount]= useState(0)

  
  const formRef = useRef(null);
  const nameInputRef = useRef(null);
  const amountInputRef = useRef(null);
  const budgetIdRef = useRef(null)


  const { addTransaction, budgets } = useContext(GlobalContext)


  const onSubmit = e => {
    e.preventDefault();

    const nameInputEl = nameInputRef.current;
    const amountInputEl = amountInputRef.current;
    
    const newTransaction = {
      id: uuidV4(),
      name: nameInputEl.value,
      amount: parseInt(amountInputEl.value),
      budgetId:budgetIdRef.current.value,

    }

    addTransaction(newTransaction)
  }
  return (
    <>
    <Params/>

    {budgets.length === 0 && (
      <div className='AddTransaction drop-shadow-2xl flex flex-col w-full h-full items-center justify-center space-y-1'>
        <span className="material-symbols-rounded text-7xl m-4">contract_delete</span>
        <h1 className="font-bold text-lg">No transactions 😢!</h1>
        <p className="w-10/12 !mb-7 text-base opacity-60">To add a transaction, you must create a budget. Tap the button below, to create a new budget</p>

        <NavLink to="/addBudget">
          <button className=' bg-blue-300 p-3 rounded-lg text-white font-semibold hover:bg-blue-500'>Create a budget</button>
        </NavLink>
      </div>       


    )}


    {budgets.length > 0 && (
      <div className='AddTransaction drop-shadow-2xl'>           
      
          <h1>Add New Transaction</h1>
          <form ref={formRef} className='form hover:drop-shadow-2xl' onSubmit={onSubmit}>


              <div className=' flex flex-row  text-start'>
                  <label className=' flex-1' htmlFor="BudgetName">Budget</label>
                  <select className='bg-slate-50' type="number"  ref={budgetIdRef}>
                      {budgets.map(budget => (
                              <option key={budget.id} value={budget.id}>{budget.category}</option>
                      ))}
                  </select> 
              </div>


              <div className='form-control'>
                    <label htmlFor="text">Transaction Name</label>
                    <input ref={nameInputRef} name='name' type="text" placeholder='Enter the transaction name' value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className='form-control'>
                    <label htmlFor="amount">amount</label>
                    <input ref={amountInputRef} name='amount' type="number" placeholder='Enter your amount' value={amount} onChange={(e) => setamount(e.target.value)}/>
              </div>
              <div>
                    <button className=' bg-blue-300 p-3 rounded-lg text-white font-semibold hover:bg-blue-500'> Add Transaction</button>
              </div>
          </form>
        
            <div className=' w-full h-full overflow-auto flex flex-col items-center'>
                <TransactionList/>
            </div>
      </div>


    )}
    </>
  )
}
