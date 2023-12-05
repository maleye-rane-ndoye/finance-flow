import React from 'react'
import { NavLink } from 'react-router-dom'
export default function NaveBare() {
  return (
    <div className='NaveBare drop-shadow-2xl'>

        <NavLink to="/" className = {({isActive})=>(isActive ? "ActiveLink" : "NavButton drop-shadow-2xl")}>
        <div >
            <span className="material-symbols-rounded">wallet</span>
            <p>Wallet</p>   
        </div>
        </NavLink>


        <NavLink to="/addBudget" className = {({isActive})=>(isActive ? "ActiveLink" : "NavButton drop-shadow-2xl")}>
        <div>
             <span className="material-symbols-rounded">content_copy</span>
             <p>Budgets</p>
        </div>
        </NavLink>

        <NavLink to="/addTransaction" className = {({isActive})=>(isActive ? "ActiveLink" : "NavButton drop-shadow-2xl")}>
        <div>
             <span className="material-symbols-rounded">paid</span>
             <p>Expense</p>
        </div>
        </NavLink>
        
        <NavLink to="/budgetStats" className = {({isActive})=>(isActive ? "ActiveLink" : "NavButton drop-shadow-2xl")}>
        <div>
             <span className="material-symbols-rounded">query_stats</span>
             <p>Stats</p>
        </div>
        </NavLink>
        
    </div>
  )
}
