// Mengimpor stylesheet utama aplikasi
import './App.css'
// Mengimpor useState untuk state management
import React, { useState } from 'react';
// Mengimpor library untuk menghasilkan nama acak beserta kamus kata-katanya
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';


// Konfigurasi untuk generator nama acak
const customConfig = {
  dictionaries: [adjectives, colors, animals], // Menggabungkan kata sifat, warna, dan hewan
  separator: ' ',                                // Pemisah antar kata menggunakan spasi
  length: 3,                                     // Panjang nama terdiri dari 3 kata
};

// Komponen utama untuk mendemonstrasikan useState
export default function AppState() {

  // State untuk menyimpan nama acak yang dihasilkan (nilai awal: undefined)
  const [randomName, setRandomName] = useState();


  // Fungsi untuk menghasilkan nama acak
  function generateRandomName() {
    const generatedName = uniqueNamesGenerator(customConfig); // Panggil library dengan konfigurasi
    setRandomName(generatedName) // Simpan nama yang dihasilkan ke state
  }

  return (
    <main>
      {/* Judul halaman */}
      <h1>Belajar React Hook</h1>
      <p>Random Name Generator</p>

      {/* Tampilkan nama acak hanya jika randomName sudah ada (truthy) */}
      {
        randomName && <h3>{randomName}</h3>
      }

      {/* Tombol untuk menghasilkan nama acak */}
      <button
        style={{ alignSelf: 'center' }}
        onClick={generateRandomName}
      >
        Generate Random Name
      </button>
    </main>
  )


}