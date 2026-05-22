import { useState } from 'react';

// Custom hook untuk mengelola nilai input form
export default function useInput(initialValue) {

  // State untuk menyimpan nilai input, diinisialisasi dengan nilai awal (initialValue)
  const [value, setValue] = useState(initialValue);

  // Fungsi untuk mereset nilai input kembali ke nilai awal
  const reset = () => {
    setValue(initialValue);
  }

  // Objek yang berisi properti untuk binding ke elemen input
  // value: nilai saat ini dari input
  // onChange: event handler yang akan mengupdate state saat pengguna mengetik
  const bind = {
    value,
    onChange: e => {
      setValue(e.target.value)
    }
  };

  // Mengembalikan array berisi: nilai saat ini, objek bind, dan fungsi reset
  return [value, bind, reset];
}