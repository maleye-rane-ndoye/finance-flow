import React from 'react'
import { GlobalContext } from '../Context/GlobalStats'
import { useContext } from 'react'
import {Transaction} from './Transaction'

export default function TransactionList() {

  const { transactions } = useContext(GlobalContext)




  return (
    <ul>
      {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
          
    </ul>
   
    

  )
}
