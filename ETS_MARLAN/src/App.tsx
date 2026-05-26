// PBF-03/04: App utama - Routing dengan React Router
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Mengimpor Routes dan Route untuk routing antar halaman
import { Box } from '@mui/material'; // Mengimpor Box dari Material UI untuk layout
import Navbar from './components/Navbar'; // Mengimpor komponen Navbar (navigasi atas)
import Footer from './components/Footer'; // Mengimpor komponen Footer (bawah halaman)
import Beranda from './pages/Beranda'; // Mengimpor halaman Beranda
import Tentang from './pages/Tentang'; // Mengimpor halaman Tentang
import Kontak from './pages/Kontak'; // Mengimpor halaman Kontak

// Fungsi utama App: mengatur tata letak halaman dan rute/routing antar halaman
export default function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> {/* Kontainer utama dengan flexbox vertikal, tinggi minimal setinggi layar */}
      <Navbar /> {/* Navigasi atas (menu Beranda, Tentang, Kontak) */}
      <Box sx={{ flexGrow: 1, pt: 8 }}> {/* Area konten utama, flexGrow biar mengisi sisa ruang, pt:8 karena Navbar fixed */}
        <Routes> {/* Daftar rute/routing halaman */}
          <Route path="/" element={<Beranda />} /> {/* Rute utama '/' menampilkan halaman Beranda */}
          <Route path="/tentang" element={<Tentang />} /> {/* Rute '/tentang' menampilkan halaman Tentang */}
          <Route path="/kontak" element={<Kontak />} /> {/* Rute '/kontak' menampilkan halaman Kontak */}
        </Routes>
      </Box>
      <Footer /> {/* Footer di bagian bawah halaman */}
    </Box>
  );
}
