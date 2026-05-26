// PBF-03/04: Halaman Beranda
// PBF-01: Destructuring, Template Literals, Array.map()
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material'; // Mengimpor komponen Material UI

// PBF-01: Array of objects untuk daftar keahlian
const keahlian = [
  { nama: 'React', icon: '⚛️' },
  { nama: 'JavaScript', icon: '📜' },
  { nama: 'PHP', icon: '🐘' },
  { nama: 'MySQL', icon: '🗄️' },
  { nama: 'SQL Server', icon: '🗄️' },
  { nama: 'CodeIgniter', icon: '⚡' },
];

// Komponen halaman Beranda menggunakan arrow function
const Beranda = () => {
  return (
    <Box>
      {/* Bagian Hero (header besar) */}
      <Box sx={{ bgcolor: '#1976d2', color: 'white', py: 8, textAlign: 'center' }}> {/* Background biru, teks putih, padding vertikal 8, rata tengah */}
        <Container>
          <Avatar sx={{ width: 100, height: 100, mx: 'auto', mb: 2, bgcolor: '#1565c0', fontSize: 40 }}> {/* Avatar lingkaran dengan inisial MM */}
            MM
          </Avatar>
          {/* PBF-01: Template literals untuk menampilkan teks sapaan */}
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}> {/* Judul besar tebal */}
            {`Halo, Saya Marlan Munaji`} {/* Template literal */}
          </Typography>
          <Typography variant="h6"> {/* Subjudul */}
            Mahasiswa Informatika di Universitas Insan Cita Indonesia (UICI)
          </Typography>
        </Container>
      </Box>

      {/* Bagian Keahlian */}
      <Container sx={{ py: 6 }}> {/* Kontainer dengan padding vertikal 6 */}
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}> {/* Judul bagian Keahlian */}
          Keahlian Saya
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}> {/* Grid dengan jarak antar item 3 */}
          {/* PBF-01: Array.map() untuk menampilkan setiap item keahlian */}
          {keahlian.map((item) => (
            <Grid size={{ xs: 6, sm: 4, md: 4 }} key={item.nama}> {/* Setiap item keahlian dalam grid, 2 kolom di hp, 3 kolom di layar lebih besar */}
              <Card sx={{ textAlign: 'center', py: 3, '&:hover': { boxShadow: 6 } }}> {/* Kartu dengan efek hover bayangan */}
                <CardContent>
                  <Typography variant="h3">{item.icon}</Typography> {/* Emoji ikon keahlian */}
                  <Typography variant="h6" sx={{ mt: 1 }}>{item.nama}</Typography> {/* Nama keahlian */}
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
