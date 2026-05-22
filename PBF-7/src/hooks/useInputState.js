// ===== Mengimpor useState dari React untuk menyimpan data =====
import { useState } from 'react';

/**
 * Custom hook (fungsi khusus) untuk mengelola isi dari sebuah kotak input.
 * Fungsi ini menyediakan:
 * - value     : isi teks saat ini
 * - onChange  : fungsi yang berjalan saat user mengetik (merekam perubahan)
 * - reset     : fungsi untuk mengosongkan kotak input
 */
export default () => {
  // useState menyimpan nilai teks. Awalnya string kosong ''.
  const [value, setValue] = useState('');

  return {
    value,  // Mengembalikan nilai teks saat ini
    onChange: event => {
      // event.target.value = ambil teks terbaru yang diketik user
      setValue(event.target.value);
    },
    reset: () => setValue('')  // Mengosongkan nilai teks menjadi ''
  };
};