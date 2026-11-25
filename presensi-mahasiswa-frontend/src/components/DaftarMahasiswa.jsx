import KartuMahasiswa from './KartuMahasiswa'

function DaftarMahasiswa({ daftar }) {
  if (daftar.length === 0) {
    return <p className="kosong">Belum ada data mahasiswa</p>
  }

  return (
    <div className="daftar">
      {daftar.map((m) => (
        <KartuMahasiswa key={m.id} nama={m.nama} nim={m.nim} status={m.status} />
      ))}
    </div>
  )
}

export default DaftarMahasiswa

