import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppFunc from './AppFunc'
import AppClass from './AppClass'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppClass />
  </React.StrictMode>
)