import React, { useContext } from 'react'
import Params from './Params'
import { GlobalContext } from '../Context/GlobalStats'
import Graph from './Graph.jsx'
import GraphTransactions from './GraphTransactions.jsx'


export default function BudgetStats(props) {

  const { getCurrentGraphBudget,getCurrentGraphTransaction } = useContext(GlobalContext);

  const data = getCurrentGraphBudget()
  const data2 = getCurrentGraphTransaction()


  return (
    <>
        <Params/>
        <div className='BudgetStats'>
          <h1 className=' text-lg my-4 font-bold'>Summary </h1>
             <Graph data={data}/>
          <h2 className=' text-lg my-4 underline'>Budgets chart summary</h2>


             <GraphTransactions data1={data} data2={data2}/>
          <h2 className=' text-lg my-4 underline'>Transactions chart summary</h2>
        </div>
    </>
  )
}
