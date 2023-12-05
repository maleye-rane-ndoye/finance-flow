import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BudgetsProvider } from './Context/BudgetsContext.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BudgetsProvider>
      <BrowserRouter>
       <App/>
     </BrowserRouter>
    </BudgetsProvider>
  </React.StrictMode>,
)
