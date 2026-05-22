// ===== Mengimpor komponen-komponen yang dibutuhkan =====
import React from 'react';
import TextField from '@mui/material/TextField';
import useInputState from '../hooks/useInputState';

/**
 * Komponen form untuk menambah tugas baru.
 * Fungsi ini menampilkan kotak input dan tombol submit (enter).
 * 
 * @param {Object} props - Berisi fungsi saveTodo untuk menyimpan tugas baru
 */
const TodoForm = ({ saveTodo }) => {
  // Mengambil nilai input (value), fungsi reset (membersihkan input), dan onChange (merekam perubahan)
  const { value, reset, onChange } = useInputState();

  return (
    <form
      // Saat form di-submit (ditekan enter), jalankan fungsi ini:
      onSubmit={event => {
        event.preventDefault(); // Mencegah halaman refresh

        saveTodo(value);  // Simpan tugas baru
        reset();          // Kosongkan kotak input setelah tugas ditambahkan
      }}
    >
      {/**
       * TextField adalah kotak input dari Material-UI.
       * - placeholder: teks petunjuk di dalam kotak
       * - onChange: merekam setiap perubahan yang diketik user
       * - value: isi teks saat ini di dalam kotak
       */}
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;