// PBF-01: Arrow function component
import React from 'react';
import { Box, Typography, Container } from '@mui/material'; // Mengimpor komponen Material UI untuk layout dan teks

// PBF-01: Template literals untuk membuat teks footer dengan tahun saat ini
const tahun = new Date().getFullYear(); // Mendapatkan tahun berjalan
const teksFooter = `© ${tahun} Marlan Munaji`; // Teks hak cipta menggunakan template literal

// Komponen Footer (bawah halaman) menggunakan arrow function
const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#1976d2', color: 'white', py: 3, mt: 'auto' }}> {/* Kotak biru dengan teks putih, padding vertikal 3, margin atas auto */}
      <Container maxWidth="sm"> {/* Kontainer dengan lebar maksimum kecil */}
        <Typography variant="body2" align="center"> {/* Teks ukuran kecil, rata tengah */}
          {teksFooter} {/* Menampilkan teks hak cipta */}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
