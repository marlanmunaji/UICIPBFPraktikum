// Mengimpor React dan ReactDOM untuk rendering aplikasi
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppRouter from './AppRouter'

// Render komponen utama ke dalam elemen dengan id "root" di HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Menggunakan AppRouter sebagai komponen utama, bukan App */}
    <AppRouter />
  </React.StrictMode>
)