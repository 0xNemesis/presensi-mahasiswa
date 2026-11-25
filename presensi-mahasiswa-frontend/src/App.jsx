import { useState } from 'react'
import Header from './components/Header'
import RingkasanPresensi from './components/RingkasanPresensi'
import FormTambahMahasiswa from './components/FormTambahMahasiswa'
import DaftarMahasiswa from './components/DaftarMahasiswa'
import './App.css'

function App() {
  const [daftar, setDaftar] = useState([
    { id: 1, nama: 'Budi Santoso', nim: '2301010001', status: 'Hadir' },
    { id: 2, nama: 'Siti Nurhaliza', nim: '2301010002', status: 'Izin' },
    { id: 3, nama: 'Andi Pratama', nim: '2301010003', status: 'Sakit' },
    { id: 4, nama: 'Dewi Lestari', nim: '2301010004', status: 'Alpha' },
  ])

  const tambahMahasiswa = (data) => {
    setDaftar([...daftar, { id: Date.now(), ...data }])
  }

  return (
    <div className="app">
      <Header judul="Presensi Mahasiswa" />
      <RingkasanPresensi daftar={daftar} />
      <FormTambahMahasiswa onTambah={tambahMahasiswa} />
      <DaftarMahasiswa daftar={daftar} />
    </div>
  )
}

export default App
