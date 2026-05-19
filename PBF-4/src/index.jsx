// Mengimpor library React untuk membuat komponen
import React from 'react'
// Mengimpor ReactDOM untuk merender komponen ke DOM (halaman HTML)
import ReactDOM from 'react-dom/client'
// Mengimpor komponen App dari file App.jsx
import App from './App'

// Mencari elemen HTML dengan id "root" dan merender komponen React ke dalamnya
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> membantu mendeteksi masalah potensial di aplikasi (hanya untuk development)
  <React.StrictMode>
    {/* Memanggil komponen App sebagai komponen utama aplikasi */}
    <App />
  </React.StrictMode>
)