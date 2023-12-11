import React from 'react'
import { useState } from 'react'
export default function AddTransaction() {

  const[text, setText]= useState('')
  const[amount, setAmount]= useState(0)

  return (
    <div className='AddTransaction drop-shadow-2xl'>
        <h1>Add New Transaction</h1>
        <form className='form hover:drop-shadow-2xl'>
            <div className='form-control'>
                  <label htmlFor="text">Text</label>
                  <input type="text" placeholder='Enter your text' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                  <label htmlFor="amont">Amont</label>
                  <input type="number" placeholder='Enter your aumount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </div>
            <div>

            <button className=' bg-blue-300 p-3 rounded-lg text-white font-semibold hover:bg-blue-500'> Add Transaction</button>
            </div>
        </form>

    </div>
  )
}
