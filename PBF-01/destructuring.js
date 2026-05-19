// destructuring
const book = {
  "title": "Manusia Setengah Salmon",
  "author": "Raditya Dika",
  "publisher": {
    "name": "Gagas Media",
    "address": "Jakarta Selatan"
  }
}

const {title: bookTitle, author = "RD", publisher:{name, address}} = book;

console.log(bookTitle, author, name, address);