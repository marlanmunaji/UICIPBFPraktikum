// Mengimpor stylesheet utama aplikasi
import './App.css'
// Mengimpor useState untuk state, useEffect untuk efek samping
import React, { useState, useEffect } from 'react';
// Mengimpor library untuk menghasilkan nama acak beserta kamus kata-katanya
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';


// Konfigurasi untuk generator nama acak
const customConfig = {
  dictionaries: [adjectives, colors, animals], // Menggabungkan kata sifat, warna, dan hewan
  separator: ' ',                                // Pemisah antar kata menggunakan spasi
  length: 3,                                     // Panjang nama terdiri dari 3 kata
};

// Komponen utama untuk mendemonstrasikan useState dan useEffect
export default function AppEffect() {

  // State untuk menyimpan nama acak yang dihasilkan (nilai awal: undefined)
  const [randomName, setRandomName] = useState();
  // State untuk menghitung berapa kali nama digenerate (nilai awal: 0)
  const [generateCount, setGenerateCount] = useState(0);

  // useEffect: dijalankan setiap kali nilai randomName berubah
  useEffect(() => {
    if (randomName) {  // Jika randomName ada (tidak undefined/null)
      setGenerateCount(generateCount + 1) // Increment hitungan generate
    }
  }, [randomName]) // Dependency array: efek hanya berjalan saat randomName berubah


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

      {/* Menampilkan jumlah total nama yang sudah digenerate */}
      <p>Digenerate sebanyak {generateCount} kali</p>
    </main>
  )


}