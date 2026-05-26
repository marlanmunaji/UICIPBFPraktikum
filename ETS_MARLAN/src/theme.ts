// PBF-04: Tema Material UI
import { createTheme } from '@mui/material/styles'; // Mengimpor fungsi createTheme untuk membuat tema kustom

// Membuat tema kustom dengan warna utama (primary) biru dan warna kedua (secondary) ungu
const theme = createTheme({
  palette: { // Palet warna yang akan dipakai di seluruh aplikasi
    primary: { main: '#1976d2' }, // Warna utama biru
    secondary: { main: '#9c27b0' }, // Warna kedua ungu
  },
});

export default theme; // Mengekspor tema untuk dipakai di komponen lain
