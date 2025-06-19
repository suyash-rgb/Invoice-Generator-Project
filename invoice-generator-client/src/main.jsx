import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.jsx'
import { AppContextProvider } from './context/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
)
