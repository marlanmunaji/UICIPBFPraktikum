import React from 'react'
import ReactDOM from 'react-dom/client'
import AppState from './AppState'
import AppEffect from './AppEffect'
import AppCustomHook from './AppCustomHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppCustomHook />
  </React.StrictMode>
)