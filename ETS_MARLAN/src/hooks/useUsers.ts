// PBF-07: Custom React Hook
// PBF-05/06: Fetch API + Async/Await
import { useState, useEffect } from 'react';

// PBF-07: Custom hook untuk mengambil data user
export function useUsers() {
  // PBF-07: useState
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // PBF-07: useEffect
  useEffect(() => {
    // PBF-06: Async/Await
    const ambilData = async () => {
      try {
        // PBF-05: Fetch API
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.log('Gagal ambil data:', err);
      } finally {
        setLoading(false);
      }
    };

    ambilData();
  }, []); // [] = hanya sekali saat component dimuat

  return { users, loading };
}