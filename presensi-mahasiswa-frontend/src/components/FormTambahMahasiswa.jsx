import { useState } from 'react'

function FormTambahMahasiswa({ onTambah }) {
  const [nama, setNama] = useState('')
  const [nim, setNim] = useState('')
  const [status, setStatus] = useState('Hadir')

  const handleSubmit = (e) => {
    e.preventDefault()
    onTambah({ nama, nim, status })
    setNama('')
    setNim('')
    setStatus('Hadir')
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nama mahasiswa"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="NIM"
        value={nim}
        onChange={(e) => setNim(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Hadir">Hadir</option>
        <option value="Izin">Izin</option>
        <option value="Sakit">Sakit</option>
        <option value="Alpha">Alpha</option>
      </select>
      <button type="submit">Tambah</button>
    </form>
  )
}

export default FormTambahMahasiswa

