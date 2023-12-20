import React, { useContext } from 'react'
import { useState, useRef } from 'react'
import { GlobalContext } from '../Context/GlobalStats'
import {v4 as uuidV4} from "uuid"
import Params from './Params'
import { useNavigate } from 'react-router-dom'
import TransactionList from './TransactionList'

export default function AddTransaction() {
  
  const navigate = useNavigate()
  const[text, setText]= useState('')
  const[amount, setamount]= useState(0)

  
  const formRef = useRef(null);
  const textInputRef = useRef(null);
  const amountInputRef = useRef(null);


  
  const{addTransaction} = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault();

    const textInputEl = textInputRef.current;
    const amountInputEl = amountInputRef.current;
    
    const newTransaction = {
      id: uuidV4(),
      text: textInputEl.value,
      amount: parseInt(amountInputEl.value),
    }

    addTransaction(newTransaction)
    navigate("/")
  }
  return (
    <>
    <Params/>
    <div className='AddTransaction drop-shadow-2xl'>
        <h1>Add New Transaction</h1>
        <form ref={formRef} className='form hover:drop-shadow-2xl' onSubmit={onSubmit}>
            <div className='form-control'>
                  <label htmlFor="text">Text</label>
                  <input ref={textInputRef} name='text' type="text" placeholder='Enter your text' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                  <label htmlFor="amount">amount</label>
                  <input ref={amountInputRef} name='amount' type="number" placeholder='Enter your amount' value={amount} onChange={(e) => setamount(e.target.value)}/>
            </div>
            <div>
                  <button className=' bg-blue-300 p-3 rounded-lg text-white font-semibold hover:bg-blue-500'> Add Transaction</button>
            </div>
        </form>
       

       <TransactionList/>
    </div>
    </>
  )
}
