// PBF-01: Arrow function component
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

// PBF-01: Template literals
const tahun = new Date().getFullYear();
const teksFooter = `© ${tahun} Marlan Munaji - CV Online`;

// PBF-01: Arrow function
const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#1976d2', color: 'white', py: 3, mt: 'auto' }}>
      <Container maxWidth="sm">
        <Typography variant="body2" align="center">
          {teksFooter}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;