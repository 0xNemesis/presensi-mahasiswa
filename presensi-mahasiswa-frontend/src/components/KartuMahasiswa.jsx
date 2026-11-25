function KartuMahasiswa({ nama, nim, status }) {
  return (
    <div className="kartu">
      <div>
        <h3>{nama}</h3>
        <p>NIM: {nim}</p>
      </div>
      <span className={`status status-${status.toLowerCase()}`}>{status}</span>
    </div>
  )
}

export default KartuMahasiswa

