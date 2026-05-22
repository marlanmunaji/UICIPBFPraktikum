// PBF-03/04: Halaman Kontak
// PBF-07: React Hooks (useState) untuk form
// PBF-01: Destructuring, Spread Operator, Array.map(), Arrow Function
import React, { useState } from 'react';
import {
  Box, Container, Typography, TextField, Button, Card, CardContent, Alert, Snackbar
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';

// PBF-01: Interface untuk tipe data pesan (mirip Class di PBF-01)
interface Pesan {
  id: number;
  nama: string;
  email: string;
  isi: string;
}

const Kontak = () => {
  // PBF-07: useState untuk form
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [pesan, setPesan] = useState('');
  const [terkirim, setTerkirim] = useState(false);
  const [open, setOpen] = useState(false);

  // PBF-07: useState untuk menyimpan daftar pesan yang dikirim
  // PBF-01: Array kosong sebagai initial state
  const [daftarPesan, setDaftarPesan] = useState<Pesan[]>([]);

  // PBF-01: Arrow function untuk handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (nama && email && pesan) {
      // PBF-01: Membuat objek pesan baru
      const pesanBaru: Pesan = {
        id: Date.now(), // ID unik berdasarkan waktu
        nama: nama,
        email: email,
        isi: pesan,
      };

      // PBF-01: Spread operator untuk menambah pesan baru ke array
      setDaftarPesan([...daftarPesan, pesanBaru]);

      // Tampilkan notifikasi
      setTerkirim(true);
      setOpen(true);

      // PBF-01: Reset form
      setNama('');
      setEmail('');
      setPesan('');
      setTimeout(() => setTerkirim(false), 3000);
    }
  };

  return (
    <Box>
      <Box sx={{ bgcolor: '#00695c', color: 'white', py: 6, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            Hubungi Saya
          </Typography>
          <Typography variant="h6">
            Silakan isi form di bawah
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="sm" sx={{ py: 6 }}>
        {/* Form Kirim Pesan */}
        <Card sx={{ p: 2, mb: 4 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Kirim Pesan
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                sx={{ mb: 2 }}
                required
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2 }}
                required
              />
              <TextField
                fullWidth
                label="Pesan"
                multiline
                rows={4}
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                sx={{ mb: 2 }}
                required
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                endIcon={<SendIcon />}
                disabled={terkirim}
              >
                {terkirim ? 'Terkirim!' : 'Kirim Pesan'}
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* Daftar Pesan yang sudah dikirim */}
        <Card sx={{ p: 2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Pesan yang Dikirim
            </Typography>

            {daftarPesan.length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                Belum ada pesan yang dikirim. Coba kirim pesan di form atas!
              </Typography>
            ) : (
              // PBF-01: Array.map() untuk menampilkan daftar pesan
              daftarPesan.map((item) => (
                <Card key={item.id} variant="outlined" sx={{ mb: 2, p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <PersonIcon fontSize="small" color="primary" />
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      {item.nama}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <EmailIcon fontSize="small" color="action" />
                    <Typography variant="body2" color="text.secondary">
                      {item.email}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <MessageIcon fontSize="small" color="action" />
                    <Typography variant="body2">
                      {item.isi}
                    </Typography>
                  </Box>
                </Card>
              ))
            )}
          </CardContent>
        </Card>

        {/* Info kontak */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body1">
            Email: marlan@example.com
          </Typography>
          <Typography variant="body1">
            GitHub: github.com/marlanmunaji
          </Typography>
        </Box>
      </Container>

      {/* Notifikasi sukses */}
      <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
        <Alert severity="success" onClose={() => setOpen(false)}>
          Pesan berhasil dikirim!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Kontak;