// Mengimpor file CSS untuk styling komponen ini
import './App.css'

// Mendefinisikan dan mengekspor komponen utama bernama App
export default function App() {

  // Mendeklarasikan variabel 'element' yang berisi elemen JSX <h1>
  const element = <h1>Hello, world</h1>;

  // Fungsi return untuk merender tampilan komponen
  return (
    // Elemen <main> sebagai pembungkus utama konten halaman
    <main>
      {/* Menampilkan heading level 2 dengan teks belajar JSX */}
      <h2>Belajar menggunakan JSX pada React</h2>
      {/* Elemen <header> sebagai bagian header halaman */}
      <header>
        {/* Menampilkan heading level 1 di dalam header */}
        <h1>Belajar menggunakan JSX pada React</h1>
        {/* Menampilkan paragraf teks tutorial Reactjs */}
        <p>Tutorial Reactjs untuk Pemula</p>
      </header>
    </main>
  )
}