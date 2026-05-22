// Mengimpor CSS dan library axios untuk mengambil data dari API
import './App.css'
import axios from 'axios'
import React from 'react'

// Komponen utama App yang menampilkan daftar foto
export default function App() {

  // State untuk menandai apakah data sedang dimuat (loading)
  const [isLoading, setLoading] = React.useState(false);
  // State untuk menyimpan daftar foto yang diambil dari API
  const [photos, setPhotos] = React.useState([])

  // Fungsi async untuk mengambil data foto dari API JSONPlaceholder
  async function loadPhotos() {
    setLoading(true)                              // Tampilkan status loading
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
    setPhotos(response.data);                     // Simpan data foto ke state
    setLoading(false)                             // Selesai loading
  }

  // useEffect: menjalankan loadPhotos saat komponen pertama kali dimuat
  React.useEffect(() => {
    loadPhotos().then()
  }, [])

  // Jika masih loading, tampilkan teks "Loading..."
  if (isLoading) return <h3>Loading...</h3>

  return (
    <main>
      <h2>Belajar React - API & Router</h2>
      {/* Kirim data photos ke komponen PhotoList */}
      <PhotoList photos={photos} />
    </main>
  )
}


// Komponen untuk menampilkan daftar foto dalam bentuk kartu (card)
function PhotoList({ photos }) {
  return (
    <div>
      <div className="row">

        {
          // Loop setiap foto dan tampilkan dalam card
          photos.map(photo => {
            return (
              <div className="column" key={photo.id}>
                <div className="card">
                  <h3>Photo {photo.id}</h3>
                  {/* Tampilkan gambar thumbnail dari API */}
                  <img src={photo.thumbnailUrl} width="160px" />
                  {/* Tampilkan judul foto, maksimal 30 karakter */}
                  <p>{photo.title.substring(0, 30)}</p>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  );
}