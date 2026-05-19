// destructuring
const book = {
  // membuat object book
  "title": "Manusia Setengah Salmon", 
  // properti title berisi judul buku
  "author": "Raditya Dika", 
  // properti author berisi nama penulis
  "publisher": {
    // properti publisher berupa object (nested object)
    "name": "Gagas Media", 
    // nama penerbit
    "address": "Jakarta Selatan" 
    // alamat penerbit
  }
}

const {title: bookTitle, author = "RD", publisher:{name, address}} = book;
// destructuring object:
// - title diambil lalu disimpan ke variabel baru bernama bookTitle
// - author diambil, jika tidak ada maka default "RD"
// - publisher dipecah lagi (nested destructuring) untuk ambil name dan address

console.log(bookTitle, author, name, address); 
// menampilkan nilai bookTitle, author, name, dan address ke console