// ===== Mengimpor komponen-komponen Material-UI untuk tampilan daftar =====
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

/**
 * Komponen untuk menampilkan daftar semua tugas (todo).
 * 
 * @param {Object} props - Berisi:
 *   - todos: array (daftar) berisi semua tugas
 *   - deleteTodo: fungsi untuk menghapus tugas berdasarkan nomor urutnya (index)
 */
const TodoList = ({ todos, deleteTodo }) => (
  <div>

    {/** Membungkus semua item dalam komponen List (daftar) dari Material-UI */}
    <List>
      {/**
       * .map() = mengulang setiap item dalam array todos.
       * Untuk setiap tugas, buat satu baris ListItem.
       * key = nomor unik untuk setiap baris (biar React bisa melacaknya).
       */}
      {todos.map((todo, index) => (
        <ListItem key={index.toString()} dense button>
          
          {/** Kotak centang (checklist), belum diaktifkan fungsinya */}
          <Checkbox tabIndex={-1} disableRipple />

          {/** Menampilkan teks tugas */}
          <ListItemText secondary={todo} />

          {/** Bagian di samping kanan item, berisi tombol hapus */}
          <ListItemSecondaryAction>
            {/**
             * Tombol hapus (icon tempat sampah).
             * Saat diklik, jalankan fungsi deleteTodo dengan nomor index-nya.
             */}
            <IconButton
              aria-label="Delete"
              onClick={() => {
                deleteTodo(index);
              }}
            >
              <DeleteOutlinedIcon stroke="red" fill="red" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>

  </div>
);

export default TodoList;