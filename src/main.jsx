import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BudgetsProvider } from './Context/BudgetsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BudgetsProvider>
     <App />
    </BudgetsProvider>
  </React.StrictMode>,
)
