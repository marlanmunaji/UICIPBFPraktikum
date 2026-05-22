// PBF-03/04: Halaman Beranda
// PBF-01: Destructuring, Template Literals, Array.map()
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';

// PBF-01: Array of objects
const keahlian = [
  { nama: 'React', icon: '⚛️' },
  { nama: 'JavaScript', icon: '📜' },
  { nama: 'PHP', icon: '🐘' },
  { nama: 'MySQL', icon: '🗄️' },
  { nama: 'SQL Server', icon: '🗄️' },
  { nama: 'CodeIgniter', icon: '⚡' },
];

const Beranda = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ bgcolor: '#1976d2', color: 'white', py: 8, textAlign: 'center' }}>
        <Container>
          <Avatar sx={{ width: 100, height: 100, mx: 'auto', mb: 2, bgcolor: '#1565c0', fontSize: 40 }}>
            M
          </Avatar>
          {/* PBF-01: Template literals */}
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            {`Halo, Saya Marlan Munaji`}
          </Typography>
          <Typography variant="h6">
            Mahasiswa Informatika
          </Typography>
        </Container>
      </Box>

      {/* Keahlian Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Keahlian Saya
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {/* PBF-01: Array.map() */}
          {keahlian.map((item) => (
            <Grid size={{ xs: 6, sm: 4, md: 4 }} key={item.nama}>
              <Card sx={{ textAlign: 'center', py: 3, '&:hover': { boxShadow: 6 } }}>
                <CardContent>
                  <Typography variant="h3">{item.icon}</Typography>
                  <Typography variant="h6" sx={{ mt: 1 }}>{item.nama}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Beranda;