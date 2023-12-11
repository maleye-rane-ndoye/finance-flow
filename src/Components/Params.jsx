import React from 'react'
import {useState} from 'react'
import SideBarre from './SideBarre'
import { NavLink } from 'react-router-dom'
import Balance from './Balance'
export default function Params() {

  const[sidebare, setSidebare] = useState(false)

  const showSidebare = () =>{
    setSidebare(true)
  }
  

  const CloseSidebare = () =>{

    setSidebare(false)
}
  
   


  return (
    <div className='Params'>


         <div className='Paramets'>
            <div>
                {sidebare === false && <span onClick={showSidebare}  className="material-symbols-rounded cursor-pointer ">menu</span>}
                {sidebare === true && <span onClick={CloseSidebare} className=" cursor-pointer material-symbols-rounded">close</span>}
                {sidebare && <SideBarre active={setSidebare}/>}
            </div>
            <div>
               
                  <NavLink to='/profile'><span  className="material-symbols-rounded cursor-pointer ">person</span></NavLink>
            </div>
         </div>
         <Balance/>
    </div>
  )
}
 