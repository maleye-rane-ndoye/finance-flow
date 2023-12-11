import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GlobalProvider } from './Context/GlobalStats.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
      <GlobalProvider>
         <App/>
       </GlobalProvider>
     </BrowserRouter>
  </React.StrictMode>,
)
