// Mengimpor React dan komponen dari react-router-dom untuk routing halaman
import React from "react";
import {
  BrowserRouter,   // Membungkus seluruh aplikasi agar bisa menggunakan router
  Routes,          // Tempat untuk mendefinisikan daftar rute/routing
  Route,           // Mendefinisikan satu rute (pasangan URL dan komponen)
  Link,            // Komponen untuk navigasi antar halaman (mirip tag <a>)
} from "react-router-dom";

// Komponen utama router yang mengatur navigasi dan rute halaman
export default function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        {/* Navigasi menu di bagian atas halaman */}
        <nav>
          <ul>
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <Link to="/berita">Berita</Link>
            </li>
            <li>
              <Link to="/tentang">Tentang</Link>
            </li>
            {<li>
              <Link to="/profile">Profile</Link>
            </li>}
          </ul>
        </nav>

        {/* Daftar rute: menentukan komponen mana yang tampil untuk setiap URL */}
        <Routes>
          <Route path="/berita" element={<Berita />} />    {/* URL /berita */}
          <Route path="/tentang" element={<Tentang />} />  {/* URL /tentang */}
          <Route path="/" element={<Beranda />} />          {/* URL / (beranda) */}
          {<Route path="/profile/*" element={<Profile />} />} {/* URL /profile */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}


// Komponen untuk halaman Beranda
function Beranda() {
  return <h2>Beranda</h2>;
}

// Komponen untuk halaman Berita
function Berita() {
  return <h2>Berita</h2>;
}

// Komponen untuk halaman Tentang (berisi profil pembuat)
function Tentang() {
  return (
    <div>
      <h2>Tentang</h2>
      <h3>NIM: 310700012420010</h3>
      <h3>Nama: Marlan Munaji</h3>
    </div>
  );
}

// Komponen untuk halaman Profile yang memiliki sub-rute (CV dan Contact)
function Profile() {
  return (
    <div>
      {/* Navigasi sub-menu di dalam halaman Profile */}
      <nav>
        <Link to="cv">CV</Link>
        <br />
        <Link to="contact">Contacts</Link>
      </nav>

      {/* Daftar sub-rute untuk halaman Profile */}
      <Routes>
        <Route path="cv" element={<CV />} />
        <Route path="cantact" element={<Contact />} />
      </Routes>
    </div>
  );
}

// Komponen untuk menampilkan CV / data diri
function CV() {
  return (
    <div>
      <h3>Nama Lengkap: Marlan Munaji</h3>
      <h3>Tanggal Lahir: 12 Mei 1995</h3>
      <h3>Pendidikan Terakhir: SMK</h3>
    </div>
  )
}

// Komponen untuk menampilkan informasi kontak
function Contact() {
  return (
    <div>
      <h3>Email: marlanmunaji@gmail.com</h3>
      <h3>Twitter: @marlanmunaji</h3>
      <h3>Instagram: @marlanmunaji</h3>
    </div>
  )
}