// PBF-07: React Hooks (useState) + PBF-01: Arrow function, Array
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, Button, Box
} from '@mui/material';

// PBF-01: Array of objects untuk menu
const menu = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang', path: '/tentang' },
  { label: 'Kontak', path: '/kontak' },
];

// PBF-01: Arrow function component
const Navbar = () => {
  // PBF-07: React hooks
  const navigate = useNavigate();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          CV Marlan Munaji
        </Typography>
        <Box>
          {/* PBF-01: Array.map() untuk render menu */}
          {menu.map((item) => (
            <Button
              key={item.path}
              color="inherit"
              onClick={() => navigate(item.path)}
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