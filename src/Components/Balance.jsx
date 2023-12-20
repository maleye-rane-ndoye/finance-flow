import React from 'react'
import { GlobalContext } from '../Context/GlobalStats'
import { useContext } from 'react'


const Balance = () => {

  const { transactions } = useContext(GlobalContext)

  
  const amouts = transactions.map(transaction => transaction.amount)
  const total = amouts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <div className='Container'>
       <h4>Your Balance</h4>
       <h1>$ {total}</h1>
    </div>
  )
}

export default Balance
