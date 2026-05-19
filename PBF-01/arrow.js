var greeting = message => { 
  // membuat fungsi arrow dengan satu parameter (message)
  alert(message); 
  // menampilkan isi parameter message ke dalam alert
}
greeting('Selamat Pagi'); 
// memanggil fungsi greeting dengan isi "Selamat Pagi"

var greetingNew = (message1, message2) => { 
  // membuat fungsi arrow dengan dua parameter (message1 dan message2)
  alert(message1 + message2); 
  // menampilkan gabungan (concatenation) message1 dan message2
}
// contoh pemanggilan (opsional biar jelas)
greetingNew('Selamat ', 'Malam');
// hasil: "Selamat Malam"