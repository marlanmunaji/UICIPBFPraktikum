import React from 'react';
import useInput from '../hooks/useInput';

export default function UserForm() {

  // Menggunakan custom hook useInput untuk mengelola input 'firstName'
  // dengan nilai default 'Hendra'. Mengembalikan: nilai input, properti untuk binding, dan fungsi reset.
  const [firstName, bindFirstName, resetFirstName] = useInput('Hendra');

  // Menggunakan custom hook useInput untuk mengelola input 'lastName'
  // dengan nilai default 'Permana'. Mengembalikan: nilai input, properti untuk binding, dan fungsi reset.
  const [lastName, bindLastName, resetLastName] = useInput('Permana')

  // State untuk menyimpan teks judul yang akan ditampilkan setelah form disubmit
  const [title, setTitle] = React.useState('')

  // Handler untuk event submit form
  const submitHandler = e => {
    e.preventDefault(); // Mencegah reload halaman saat form disubmit

    // Mengupdate state title dengan kalimat sapaan berisi firstName dan lastName
    setTitle(`Hello ${firstName} ${lastName}`)

    // Mengembalikan nilai input firstName dan lastName ke nilai awal
    resetFirstName();
    resetLastName();
  }

  return (
    <>
      {/* Menampilkan judul yang sudah diupdate setelah form disubmit */}
      <h3>{title}</h3>

      {/* Form dengan event onSubmit yang memanggil submitHandler */}
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          {/* Input untuk first name dengan binding dari useInput */}
          <input
            {...bindFirstName}
            type='text' />
        </div>

        <div>
          <label>Last Name</label>
          {/* Input untuk last name dengan binding dari useInput */}
          <input
            {...bindLastName}
            type='text' />
        </div>

        {/* Tombol untuk mengirimkan data form */}
        <button>Submit</button>
      </form>
    </>
  )
}