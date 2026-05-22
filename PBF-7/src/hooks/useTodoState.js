// ===== Mengimpor useState dari React untuk menyimpan data =====
import { useState } from 'react';

/**
 * Custom hook (fungsi khusus) untuk mengelola daftar tugas (todos).
 * Fungsi ini menyediakan:
 * - todos      : array (daftar) berisi semua tugas
 * - addTodo    : fungsi untuk menambah tugas baru
 * - deleteTodo : fungsi untuk menghapus tugas berdasarkan nomor urutnya
 * 
 * @param {Array} initialValue - Nilai awal daftar tugas (biasanya array kosong [])
 */
export default initialValue => {
  // useState menyimpan daftar tugas. Nilai awalnya dari parameter initialValue.
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,  // Mengembalikan daftar tugas saat ini
    
    /**
     * addTodo: fungsi untuk menambah tugas baru ke dalam daftar.
     * @param {string} todoText - Teks tugas yang akan ditambahkan
     */
    addTodo: todoText => {
      // Menggabungkan array lama dengan tugas baru (menggunakan spread operator ...)
      setTodos([...todos, todoText]);
    },

    /**
     * deleteTodo: fungsi untuk menghapus tugas berdasarkan nomor urutnya (index).
     * @param {number} todoIndex - Nomor urut tugas yang ingin dihapus
     */
    deleteTodo: todoIndex => {
      // .filter() = menyaring array, menyimpan semua tugas KECUALI yang index-nya cocok
      const newTodos = todos.filter((_, index) => index !== todoIndex);

      setTodos(newTodos);  // Simpan daftar baru (tanpa tugas yang dihapus)
    }
  };
};