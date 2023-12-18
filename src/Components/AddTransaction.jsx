import React, { useContext } from 'react'
import { useState } from 'react'
import { GlobalContext } from '../Context/GlobalStats'
import {v4 as uuidV4} from "uuid"
import Params from './Params'
import { useNavigate } from 'react-router-dom'

export default function AddTransaction() {
  
  const navigate = useNavigate()
  const[text, setText]= useState('')
  const[amount, setAmount]= useState(0)

  
  const{addTransaction} = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: uuidV4(),
      text,
      amount: +amount
    }

    addTransaction(newTransaction)
    navigate("/")
  }
  return (
    <>
    <Params/>
    <div className='AddTransaction drop-shadow-2xl'>
        <h1>Add New Transaction</h1>
        <form className='form hover:drop-shadow-2xl' onSubmit={onSubmit}>
            <div className='form-control'>
                  <label htmlFor="text">Text</label>
                  <input type="text" placeholder='Enter your text' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                  <label htmlFor="amount">Amount</label>
                  <input type="number" placeholder='Enter your amount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </div>
            <div>
                  <button className=' bg-blue-300 p-3 rounded-lg text-white font-semibold hover:bg-blue-500'> Add Transaction</button>
            </div>
        </form>

    </div>
    </>
  )
}
