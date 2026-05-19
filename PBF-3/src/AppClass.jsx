// Mengimpor file CSS untuk styling komponen
import './App.css'
// Mengimpor library React untuk membuat komponen berbasis class
import React from 'react';

// Mendefinisikan dan mengekspor komponen utama AppClass yang merupakan turunan dari React.Component
export default class AppClass extends React.Component {

  // Method render untuk merender tampilan komponen ke layar
  render() {
    // Mengembalikan elemen JSX yang akan ditampilkan
    return (
      // Elemen <main> sebagai pembungkus utama konten
      <main>
        {/* Menampilkan heading level 2 */}
        <h2>Belajar menggunakan JSX pada React</h2>
        {/* Memanggil komponen Header yang sudah didefinisikan di bawah */}
        <Header />

      </main>
    )
  }
}

// Mendefinisikan komponen kelas Header
class Header extends React.Component {
  // Method render untuk menampilkan konten Header
  render() {
    // Mengembalikan elemen JSX
    return (
      // Elemen <div> sebagai pembungkus konten Header
      <div>
        {/* Menampilkan judul utama */}
        <h1>Tutorial Reactjs untuk Pemula</h1>
        {/* Menampilkan sub-judul */}
        <h2>Panduan step-by-step belajar Reactjs</h2>
        {/* Menampilkan paragraf deskripsi */}
        <p>Membuat komponen dengan class</p>
        {/* Memanggil komponen Message dengan props sender="dian" dan content="Hi, Apa kabar?" */}
        <Message sender="dian" content="Hi, Apa kabar?" />
      </div>
    );
  }
}

// Mendefinisikan komponen kelas Message untuk menampilkan pesan
class Message extends React.Component {
  // Method render untuk menampilkan konten pesan
  render() {
    // Mengembalikan elemen JSX
    return (
      // Elemen <div> sebagai pembungkus pesan
      <div>
        {/* Menampilkan nama pengirim (diambil dari props) dengan huruf kecil */}
        <small>{this.props.sender}:</small>
        {/* Menampilkan isi pesan (diambil dari props) */}
        <p>{this.props.content}</p>
        {/* Menambahkan garis pemisah antar pesan */}
        <hr />
      </div>
    );
  }
}