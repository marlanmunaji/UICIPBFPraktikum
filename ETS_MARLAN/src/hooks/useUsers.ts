// PBF-07: Custom React Hook
// PBF-05/06: Fetch API + Async/Await
import { useState, useEffect } from 'react'; // Mengimpor hook useState dan useEffect dari React

// Custom hook untuk mengambil data user dari API eksternal
export function useUsers() {
  // PBF-07: useState untuk menyimpan data dan status loading
  const [users, setUsers] = useState([]); // State untuk menyimpan daftar user, awalnya array kosong
  const [loading, setLoading] = useState(true); // State untuk status loading, awalnya true

  // PBF-07: useEffect untuk menjalankan kode saat komponen pertama kali dimuat
  useEffect(() => {
    // PBF-06: Fungsi async untuk mengambil data dari API
    const ambilData = async () => {
      try {
        // PBF-05: Fetch API untuk mengambil data dari URL
        const res = await fetch('https://jsonplaceholder.typicode.com/users'); // Memanggil API
        const data = await res.json(); // Mengubah response menjadi format JSON
        setUsers(data); // Menyimpan data user ke state
      } catch (err) { // Jika terjadi error
        console.log('Gagal ambil data:', err); // Tampilkan error di console
      } finally { // Apapun hasilnya (sukses/gagal), jalankan ini
        setLoading(false); // Ubah status loading menjadi false (selesai)
      }
    };

    ambilData(); // Memanggil fungsi ambilData
  }, []); // [] = efek hanya dijalankan sekali saat komponen pertama kali dimuat

  return { users, loading }; // Mengembalikan data users dan status loading
}
