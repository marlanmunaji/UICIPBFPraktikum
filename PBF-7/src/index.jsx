// ===== Memanggil React dan komponen App untuk ditampilkan di browser =====
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

/**
 * Baris ini mencari elemen HTML dengan id "root" (biasanya ada di index.html),
 * lalu menampilkan komponen App di dalamnya.
 * StrictMode membantu mendeteksi masalah potensial di aplikasi.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)