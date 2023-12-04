import React from 'react'
import { NavLink } from 'react-router-dom'
export default function NaveBare() {
  return (
    <div className='NaveBare '>

        <NavLink to="/">
        <div>
            <span className="material-symbols-rounded">wallet</span>
            <p>Wallet</p>   
        </div>
        </NavLink>


        <NavLink to="/addBudget">
        <div>
             <span className="material-symbols-rounded">content_copy</span>
             <p>Budgets</p>
        </div>
        </NavLink>

        <NavLink to="/addTransaction">
        <div>
             <span className="material-symbols-rounded">paid</span>
             <p>Transactions</p>
        </div>
        </NavLink>
        <NavLink to="/budgetStats">
        <div>
             <span className="material-symbols-rounded">query_stats</span>
             <p>Stats</p>
        </div>
        </NavLink>
        
    </div>
  )
}
