// Mengimpor library React untuk membuat komponen
import React from 'react'
// Mengimpor ReactDOM untuk merender komponen ke DOM (Document Object Model)
import ReactDOM from 'react-dom/client'
// Mengimpor komponen App dari file App.jsx (function component biasa)
import App from './App'
// Mengimpor komponen AppFunc dari file AppFunc.jsx (function component)
import AppFunc from './AppFunc'
// Mengimpor komponen AppClass dari file AppClass.jsx (class component)
import AppClass from './AppClass'

// Mencari elemen HTML dengan id="root" lalu merender komponen React ke dalamnya
ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode digunakan untuk mendeteksi potensi masalah dalam aplikasi
  <React.StrictMode>
    {/* Menampilkan komponen AppClass sebagai komponen utama */}
    <AppClass />
  </React.StrictMode>
)