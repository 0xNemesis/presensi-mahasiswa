function RingkasanPresensi({ daftar }) {
  const hitung = (status) => daftar.filter((m) => m.status === status).length

  return (
    <section className="ringkasan">
      <p>Total: {daftar.length}</p>
      <p>Hadir: {hitung('Hadir')}</p>
      <p>Izin: {hitung('Izin')}</p>
      <p>Sakit: {hitung('Sakit')}</p>
      <p>Alpha: {hitung('Alpha')}</p>
    </section>
  )
}

export default RingkasanPresensi

