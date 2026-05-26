// PBF-07: React Hooks (useState) + PBF-01: Arrow function, Array
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Mengimpor hook useNavigate untuk navigasi halaman
import {
  AppBar, Toolbar, Typography, Button, Box
} from '@mui/material'; // Mengimpor komponen Material UI untuk navbar

// PBF-01: Array of objects untuk menu navigasi
const menu = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang', path: '/tentang' },
  { label: 'Kontak', path: '/kontak' },
];

// Komponen Navbar (navigasi atas) menggunakan arrow function
const Navbar = () => {
  // PBF-07: Hook useNavigate untuk pindah halaman
  const navigate = useNavigate();

  return (
    <AppBar position="fixed"> {/* AppBar Material UI, posisi tetap di atas */}
      <Toolbar> {/* Toolbar untuk tempat menu */}
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Marlan Munaji {/* Nama di sebelah kiri navbar */}
        </Typography>
        <Box>
          {/* PBF-01: Array.map() untuk render menu dari array */}
          {menu.map((item) => (
            <Button
              key={item.path}
              color="inherit"
              onClick={() => navigate(item.path)} // Navigasi ke path sesuai menu
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
