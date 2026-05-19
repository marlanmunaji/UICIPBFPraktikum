// Mengimpor file CSS untuk styling
import './App.css'
// Mengimpor fungsi dan daftar kata dari library unique-names-generator
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

// Mendefinisikan komponen utama App yang akan diexport secara default
export default function App() {
  return (
    <main>
      {/* Tag <main> sebagai kontainer utama halaman */}
      <h3>Belajar React</h3>
      {/* Komponen EventExample sementara dikomentari / dinonaktifkan */}
      {/*<EventExample />*/}
      {/* Komponen GenerateRandomName sementara dikomentari / dinonaktifkan */}
      {/*<GenerateRandomName />*/}
      {/* Komponen ConditionalExample sementara dikomentari / dinonaktifkan */}
      {/*<ConditionalExample isLoading={false} />*/}
      {/* Memanggil komponen ListKeyExample untuk ditampilkan */}
      {<ListKeyExample />}
    </main>
  )
}

// Mendefinisikan komponen ListKeyExample
function ListKeyExample() {
  // Membuat array data ponsel
  const phoneData = [
    // iPhone: harga 10jt, diskon 50%
    { name: "iPhone X", price: 10000000, discount: 50 },
    // Oppo: harga 14jt, diskon 30%
    { name: "Oppo Find X", price: 14000000, discount: 30 },
    // Redmi: harga 5jt, diskon 42%
    { name: "Redmi Note X", price: 5000000, discount: 42 },
    // Vivo: harga 10jt, tanpa diskon
    { name: "Vivo XYZ", price: 10000000, discount: 0 },
  ];

  return (
    <div>
      {/* Melakukan iterasi (looping) pada setiap data di phoneData */}
      {phoneData.map(data => {
        return (
          <Product
            key={data.name}
            name={data.name}
            price={data.price}
            discount={data.discount}
          />
        )
      })}
    </div>
  )
}

// Mendefinisikan komponen Product dengan props name, price, dan discount (default 0)
function Product({ name, price, discount = 0 }) {
  return (
    <div>
      <h2>{name}</h2>
      {/* Jika diskon > 0, tampilkan harga asli yang dicoret beserta persentase diskon */}
      {discount > 0 && <p><s>Rp {price}</s> ({discount}%)</p>}
      <p>
        <b>
          {/* Menghitung harga setelah diskon: harga - (harga * diskon/100) */}
          Rp {parseInt(price) - parseInt(price) * (parseInt(discount) / 100)}
        </b>
      </p>
      <hr />
    </div>
  );
}

// Mendefinisikan komponen ConditionalExample yang menerima props
function ConditionalExample(props) {
  // Jika nilai isLoading bernilai true, tampilkan loading
  if (props.isLoading) {
    return <LoadingView />
  // Jika nilai isLoading bernilai false, tampilkan halaman utama
  } else {
    return <LoggedView />
  }
}

// Mendefinisikan komponen LoadingView
function LoadingView() {
  return (
    <h2>Loading...</h2>
  )
}

// Mendefinisikan komponen LoggedView
function LoggedView() {
  // Membuat nama acak dari gabungan kata sifat, warna, dan hewan
  const random = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
  return <h2>Welcome {random}</h2>
}

// Mendefinisikan komponen GenerateRandomName
function GenerateRandomName() {
  let randomName

  // Fungsi untuk membuat nama acak
  function createRandomName() {
    randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] });
    // Menampilkan nama acak dalam alert
    alert(`Random Name: ${randomName}`)
  }

  return (
    <button onClick={createRandomName}>Generate Random Name</button>
  )
}

// Mendefinisikan komponen EventExample untuk contoh penanganan event
function EventExample() {

  let email = ""

  // Fungsi untuk menangani klik tombol
  function handleClick() {
    // Alert berisi nilai email yang tersimpan
    alert('Email: ' + email)
  }

  // Fungsi untuk menangani perubahan input
  function handleChange(event) {
    // Menyimpan nilai input ke variabel email
    email = event.target.value;
  }

  return (
    <div>
      <h4>Menangani Event</h4>
      <input onChange={(event) => {
        // Panggil handleChange saat nilai input berubah
        handleChange(event)
      }} type="email" />
      <button onClick={() => {
        // Panggil handleClick saat tombol diklik
        handleClick()
      }}>Tampilkan Email</button>
    </div>
  )
}