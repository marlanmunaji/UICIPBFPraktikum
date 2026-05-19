// Mengimpor file CSS untuk styling komponen
import './App.css'

// Mendefinisikan dan mengekspor komponen utama AppFunc (function component)
export default function AppFunc() {

  // Mendeklarasikan variabel 'element' yang berisi elemen JSX <h1>
  const element = <h1>Hello, world</h1>;

  // Fungsi return untuk merender tampilan komponen
  return (
    // Elemen <main> sebagai pembungkus utama konten halaman
    <main>
      {/* Menampilkan heading level 2 */}
      <h2>Belajar menggunakan JSX pada React</h2>
      {/* Memanggil komponen Header */}
      <Header />

    </main>
  )
}

// Mendefinisikan komponen fungsi Header
function Header() {
  // Mengembalikan elemen JSX untuk ditampilkan
  return (
    // Elemen <div> sebagai pembungkus konten Header
    <div>
      {/* Menampilkan judul utama */}
      <h1>Tutorial Reactjs untuk Pemula</h1>
      {/* Menampilkan sub-judul */}
      <h2>Function Component</h2>
      {/* Memanggil komponen Message dengan props sender="dian" dan content="Hi, Apa kabar?" */}
      <Message sender="dian" content="Hi, Apa kabar?" />
    </div>
  );
}

// Mendefinisikan komponen fungsi Message untuk menampilkan pesan
// Menerima parameter 'props' yang berisi data dari komponen induk
function Message(props) {
  // Mengembalikan elemen JSX untuk ditampilkan
  return (
    // Elemen <div> sebagai pembungkus konten pesan
    <div>
      {/* Menampilkan nama pengirim (diambil dari props) */}
      <small>{props.sender}:</small>
      {/* Menampilkan isi pesan (diambil dari props) */}
      <p>{props.content}</p>
      {/* Menambahkan garis pemisah antar pesan */}
      <hr />
    </div>
  );

}