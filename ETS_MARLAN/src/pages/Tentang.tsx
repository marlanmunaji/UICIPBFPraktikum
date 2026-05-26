// PBF-03/04: Halaman Tentang
// PBF-07: Custom Hook (useUsers) - Fetch API dari jsonplaceholder
import React from 'react';
import {
  Box, Container, Typography, Card, CardContent, CircularProgress, List, ListItem, ListItemText
} from '@mui/material'; // Mengimpor komponen Material UI
import { useUsers } from '../hooks/useUsers'; // Mengimpor custom hook useUsers

// Komponen halaman Tentang menggunakan arrow function
const Tentang = () => {
  // PBF-07: Menggunakan custom hook useUsers
  // PBF-01: Destructuring untuk mengambil nilai users dan loading dari return value hook
  const { users, loading } = useUsers();

  return (
    <Box>
      {/* Bagian header halaman Tentang */}
      <Box sx={{ bgcolor: '#9c27b0', color: 'white', py: 6, textAlign: 'center' }}> {/* Background ungu, teks putih, rata tengah */}
        <Container>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}> {/* Judul besar tebal */}
            Tentang Saya
          </Typography>
          <Typography variant="h6"> {/* Subjudul */}
            Kenali saya lebih dekat
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 6 }}> {/* Kontainer dengan padding vertikal 6 */}
        {/* Bagian Biodata */}
        <Card sx={{ mb: 4, p: 3 }}> {/* Kartu dengan margin bawah 4 dan padding 3 */}
          <CardContent>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}> {/* Judul Biodata */}
              Biodata
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}> {/* Teks paragraf: Nama */}
              Nama: Marlan Munaji
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}> {/* Teks paragraf: NIM */}
              NIM: 310700012420010
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}> {/* Teks paragraf: Program Studi */}
              Prodi: Informatika - UICI
            </Typography>
            <Typography variant="body1"> {/* Teks paragraf: Deskripsi diri */}
              Saya adalah mahasiswa yang sedang belajar pemrograman web.
              Saya menguasai React, JavaScript, PHP, CodeIgniter, SQL Server, dan MySQL.
            </Typography>
          </CardContent>
        </Card>

        {/* PBF-05/06: Bagian data dari API Eksternal */}
        <Card sx={{ p: 3 }}> {/* Kartu dengan padding 3 */}
          <CardContent>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}> {/* Judul Data dari API */}
              Data dari API Eksternal
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}> {/* Teks keterangan */}
              Berikut adalah data pengguna yang diambil dari JSONPlaceholder API
              menggunakan Fetch API + Async/Await:
            </Typography>

            {/* PBF-05/06: Jika masih loading, tampilkan spinner, jika sudah selesai tampilkan daftar */}
            {loading ? (
              <Box sx={{ textAlign: 'center', py: 4 }}> {/* Jika loading true, tampilkan spinner loading */}
                <CircularProgress /> {/* Animasi spinner */}
                <Typography sx={{ mt: 2 }}>Memuat data...</Typography> {/* Teks "Memuat data..." */}
              </Box>
            ) : (
              <List> {/* Jika loading false (data sudah siap), tampilkan daftar user dari API */}
                {/* PBF-01: Array.map() untuk menampilkan setiap user dari API */}
                {users.map((user: any) => (
                  <ListItem key={user.id} divider> {/* Setiap item user dengan garis pemisah */}
                    <ListItemText
                      primary={user.name} // Nama user sebagai teks utama
                      secondary={`${user.email} - ${user.company?.name || ''}`} // Email dan nama perusahaan sebagai teks kedua
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Tentang;
