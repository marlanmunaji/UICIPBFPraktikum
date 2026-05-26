// PBF-04: Entry point aplikasi React dengan Vite
import React from 'react';
import ReactDOM from 'react-dom/client'; // Mengimpor ReactDOM untuk render ke HTML
import { BrowserRouter } from 'react-router-dom'; // Mengimpor BrowserRouter untuk navigasi halaman
import { ThemeProvider } from '@mui/material/styles'; // Mengimpor ThemeProvider untuk tema Material UI
import CssBaseline from '@mui/material/CssBaseline'; // Mengimpor CssBaseline untuk reset CSS standar
import App from './App'; // Mengimpor komponen utama App
import theme from './theme'; // Mengimpor tema kustom

// Fungsi utama: mengambil elemen HTML dengan id "root" dan menampilkan aplikasi React di dalamnya
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> {/* Mode ketat React untuk mendeteksi masalah di development */}
    <BrowserRouter> {/* Router untuk mengatur navigasi antar halaman */}
      <ThemeProvider theme={theme}> {/* Provider tema Material UI */}
        <CssBaseline /> {/* Merapikan tampilan default CSS */}
        <App /> {/* Komponen utama aplikasi */}
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
