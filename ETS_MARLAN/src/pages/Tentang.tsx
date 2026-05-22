// PBF-03/04: Halaman Tentang
// PBF-07: Custom Hook (useUsers) - Fetch API dari jsonplaceholder
import React from 'react';
import {
  Box, Container, Typography, Card, CardContent, CircularProgress, List, ListItem, ListItemText
} from '@mui/material';
import { useUsers } from '../hooks/useUsers';

const Tentang = () => {
  // PBF-07: Menggunakan custom hook
  // PBF-01: Destructuring return value
  const { users, loading } = useUsers();

  return (
    <Box>
      <Box sx={{ bgcolor: '#9c27b0', color: 'white', py: 6, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" gutterBottom fontWeight="bold">
            Tentang Saya
          </Typography>
          <Typography variant="h6">
            Kenali saya lebih dekat
          </Typography>
        </Container>
      </Box>

      <Container sx={{ py: 6 }}>
        {/* Biodata */}
        <Card sx={{ mb: 4, p: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Biodata
            </Typography>
            <Typography variant="body1" paragraph>
              Nama: Marlan Munaji
            </Typography>
            <Typography variant="body1" paragraph>
              NIM: 310700012420010
            </Typography>
            <Typography variant="body1" paragraph>
              Prodi: Informatika - UICI
            </Typography>
            <Typography variant="body1">
              Saya adalah mahasiswa yang sedang belajar pemrograman web.
              Saya menguasai React, JavaScript, PHP, CodeIgniter, SQL Server, dan MySQL.
            </Typography>
          </CardContent>
        </Card>

        {/* PBF-05/06: Data dari External API */}
        <Card sx={{ p: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Data dari API Eksternal
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Berikut adalah data pengguna yang diambil dari JSONPlaceholder API
              menggunakan Fetch API + Async/Await:
            </Typography>

            {/* PBF-05/06: Loading & Error State */}
            {loading ? (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <CircularProgress />
                <Typography sx={{ mt: 2 }}>Memuat data...</Typography>
              </Box>
            ) : (
              <List>
                {/* PBF-01: Array.map() untuk render data API */}
                {users.map((user: any) => (
                  <ListItem key={user.id} divider>
                    <ListItemText
                      primary={user.name}
                      secondary={`${user.email} - ${user.company?.name || ''}`}
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