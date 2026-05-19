class Holiday { 
  // mendefinisikan class bernama Holiday
  constructor(destination, days) { 
    // constructor: method khusus yang dijalankan saat object dibuat
    this.destination = destination; 
    // menyimpan nilai destination ke properti object
    this.days = days; 
    // menyimpan nilai days ke properti object
  }
  info() { 
    // method untuk menampilkan informasi
    alert(this.destination + " will take " + this.days + " days."); 
    // menampilkan pesan alert berisi tujuan dan lama hari
  }
}
var trip = new Holiday("Semeru", 10); 
// membuat object baru dari class Holiday dengan destination "Semeru" dan days = 10
trip.info(); 
// memanggil method info() dari object trip