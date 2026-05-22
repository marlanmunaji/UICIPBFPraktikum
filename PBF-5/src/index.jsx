// Mengimpor React untuk JSX
import React from 'react'
// Mengimpor ReactDOM untuk me-render komponen ke DOM
import ReactDOM from 'react-dom/client'
// Mengimpor masing-masing komponen aplikasi
import AppState from './AppState'           // Demo useState
import AppEffect from './AppEffect'         // Demo useEffect
import AppCustomHook from './AppCustomHook' // Demo custom hook

// Render komponen ke dalam elemen dengan id 'root' di index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*
      Ganti komponen di bawah ini untuk melihat demo yang berbeda:
      - <AppState />      : Demo useState
      - <AppEffect />     : Demo useState + useEffect
      - <AppCustomHook /> : Demo custom hook (useInput)
    */}
    <AppCustomHook />
  </React.StrictMode>
)