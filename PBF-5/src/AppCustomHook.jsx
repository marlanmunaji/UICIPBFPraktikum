// Mengimpor stylesheet utama aplikasi
import './App.css'
// Mengimpor komponen UserForm dari folder components
import UserForm from './components/UserForm'

// Komponen utama untuk mendemonstrasikan custom hook
export default function AppCustomHook() {

  return (
    // Elemen <main> sebagai container utama (styling dari App.css)
    <main>
      {/* Judul halaman */}
      <h1>Belajar React Custom Hook</h1>

      {/* Menampilkan komponen UserForm yang menggunakan custom hook useInput */}
      <UserForm />
    </main>
  )


}