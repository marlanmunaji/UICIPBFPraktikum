import './App.css'
import axios from 'axios'
import React from 'react'

export default function App() {

  const [isLoading, setLoading] = React.useState(false);
  const [photos, setPhotos] = React.useState([])

  async function loadPhotos() {
    setLoading(true)
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
    setPhotos(response.data);
    setLoading(false)
  }

  React.useEffect(() => {
    loadPhotos().then()
  }, [])

  if (isLoading) return <h3>Loading...</h3>

  return (
    <main>
      <h2>Belajar React - API & Router</h2>
      <PhotoList photos={photos} />
    </main>
  )
}


function PhotoList({ photos }) {
  return (
    <div>
      <div className="row">

        {
          photos.map(photo => {
            return (
              <div className="column" key={photo.id}>
                <div className="card">
                  <h3>Photo {photo.id}</h3>
                  <img src={photo.thumbnailUrl} width="160px" />
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