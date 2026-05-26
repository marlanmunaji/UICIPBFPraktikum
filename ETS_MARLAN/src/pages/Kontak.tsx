// PBF-03/04: Halaman Kontak
// PBF-07: React Hooks (useState) untuk form
// PBF-01: Destructuring, Spread Operator, Array.map(), Arrow Function
import React, { useState } from 'react'; // Mengimpor React dan hook useState
import {
  Box, Container, Typography, TextField, Button, Card, CardContent, Alert, Snackbar
} from '@mui/material'; // Mengimpor komponen Material UI
import SendIcon from '@mui/icons-material/Send'; // Ikon kirim
import EmailIcon from '@mui/icons-material/Email'; // Ikon email
import PersonIcon from '@mui/icons-material/Person'; // Ikon orang
import MessageIcon from '@mui/icons-material/Message'; // Ikon pesan

// PBF-01: Interface untuk menentukan struktur data pesan (mirip Class di PBF-01)
interface Pesan {
  id: number; // ID unik pesan
  nama: string; // Nama pengirim
  email: string; // Email pengirim
  isi: string; // Isi pesan
}

// Komponen halaman Kontak menggunakan arrow function
const Kontak = () => {
  // PBF-07: useState untuk menyimpan nilai input form
  const [nama, setNama] = useState(''); // State untuk input nama, awalnya string kosong
  const [email, setEmail] = useState(''); // State untuk input email
  const [pesan, setPesan] = useState(''); // State untuk input pesan
  const [terkirim, setTerkirim] = useState(false); // State untuk status terkirim
  const [open, setOpen] = useState(false); // State untuk membuka/tutup notifikasi Snackbar

  // PBF-07: useState untuk menyimpan daftar pesan yang sudah dikirim
  // PBF-01: Array kosong sebagai initial state (tipe data array of Pesan)
  const [daftarPesan, setDaftarPesan] = useState<Pesan[]>([]);

  // PBF-01: Arrow function untuk menangani submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah reload halaman saat submit form

    if (nama && email && pesan) { // Jika semua field sudah diisi
      // PBF-01: Membuat objek pesan baru berdasarkan interface Pesan
      const pesanBaru: Pesan = {
        id: Date.now(), // ID unik berdasarkan timestamp (waktu saat ini)
        nama: nama,
        email: email,
        isi: pesan,
      };

      // PBF-01: Spread operator (...) untuk menyalin array lama dan menambah pesan baru
      setDaftarPesan([...daftarPesan, pesanBaru]); // Tambah pesan baru ke daftar

      // Tampilkan notifikasi sukses
      setTerkirim(true);
      setOpen(true);

      // PBF-01: Reset form (kembalikan state ke string kosong)
      setNama('');
      setEmail('');
      setPesan('');
      setTimeout(() => setTerkirim(false), 3000); // Setelah 3 detik, ubah status terkirim jadi false
    }
  };

  return (
    <Box>
      {/* Bagian header halaman Kontak */}
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
              {/* Field input nama */}
              <TextField
                fullWidth
                label="Nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                sx={{ mb: 2 }}
                required
              />
              {/* Field input email */}
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2 }}
                required
              />
              {/* Field input pesan (textarea) */}
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
              {/* Tombol kirim */}
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

            {/* Jika belum ada pesan, tampilkan teks kosong */}
            {daftarPesan.length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                Belum ada pesan yang dikirim. Coba kirim pesan di form atas!
              </Typography>
            ) : (
              /* PBF-01: Array.map() untuk menampilkan setiap pesan dalam daftar */
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
            Email: marlanmunaji@gmail.com
          </Typography>
          <Typography variant="body1">
            GitHub: github.com/marlanmunaji
          </Typography>
        </Box>
      </Container>

      {/* Notifikasi sukses (Snackbar) */}
      <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="success">
          Pesan berhasil dikirim!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Kontak;