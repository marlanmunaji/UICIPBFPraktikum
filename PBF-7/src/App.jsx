// ===== Mengimpor (memanggil) berbagai komponen dan alat yang dibutuhkan =====
import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@mui/material/Typography';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import useTodoState from './hooks/useTodoState';
import './App.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

/**
 * Fungsi utama App (Aplikasi) - jantung dari program ini.
 * Di sini semua komponen digabung dan ditampilkan di layar.
 * Fungsi ini mengatur daftar tugas (todo) dan menghubungkan
 * form input dengan daftar tugas yang ditampilkan.
 */
export default function App() {

  // Mengambil data todos, fungsi tambah, dan fungsi hapus dari custom hook useTodoState
  // todos = daftar tugas, addTodo = fungsi untuk menambah tugas, deleteTodo = fungsi untuk menghapus tugas
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="App">

      {/** Menampilkan judul "Todos" di halaman */}
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      {/**
       * Komponen form untuk menambah tugas baru.
       * saveTodo adalah fungsi yang dijalankan saat user menekan tombol submit.
       * Fungsi ini akan membersihkan teks dari spasi di awal/akhir (trim),
       * lalu jika teks tidak kosong, akan ditambahkan ke daftar.
       */}
      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      {/**
       * Komponen yang menampilkan daftar semua tugas.
       * todos = data daftar tugas, deleteTodo = fungsi untuk menghapus tugas tertentu.
       */}
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}