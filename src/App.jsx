import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import NaveBare from './Components/NaveBare'
import DeviceElements from './Components/DeviceElements'
import AddTransaction from './Components/AddTransaction'
import BudgetStats from './Components/BudgetStats'
import Profile from './Components/Profile'
import TransactionList from './Components/TransactionList'
import './App.css'


function App() {
 

  return (
    <div className='App'>
        <DeviceElements/>
           <Routes><Route path='/' element = {<Home/>}></Route></Routes>
           <Routes><Route path='/TransactionList' element = {<TransactionList/>}></Route></Routes>
           <Routes><Route path='/addTransaction' element = {<AddTransaction/>}></Route></Routes>
           <Routes><Route path='/budgetStats' element = {<BudgetStats/>}></Route></Routes>
           <Routes><Route path='/Profile' element = {<Profile/>}></Route></Routes>


        <NaveBare/>
    </div>
  )
}

export default App
