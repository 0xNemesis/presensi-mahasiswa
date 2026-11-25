# Aplikasi Presensi Mahasiswa (Fullstack)

Proyek aplikasi **Presensi Mahasiswa** untuk mencatat dan memantau kehadiran mahasiswa (`Hadir`, `Izin`, `Sakit`, `Alpha`). Proyek ini dibangun menggunakan arsitektur **React + Vite** pada sisi frontend serta **NestJS + Prisma ORM + PostgreSQL** pada sisi backend dengan pola MVC (*Model-View-Controller*).

---

## Struktur Proyek

```text
Presensi/
├── presensi-mahasiswa-frontend/   # Frontend (React + Vite)
├── presensi-mahasiswa-backend/    # Backend REST API (NestJS + Prisma + PostgreSQL)
└── docs/
    └── screenshot.pdf             # Dokumentasi screenshot tahapan & tampilan aplikasi
```

---

## Fitur Utama

### Frontend (`presensi-mahasiswa-frontend`)
- Menampilkan ringkasan presensi (`Total`, `Hadir`, `Izin`, `Sakit`, `Alpha`).
- Form tambah data mahasiswa (`nama`, `nim`, `status`).
- Daftar kartu mahasiswa beserta status presensi.

### Backend (`presensi-mahasiswa-backend`)
- **CRUD Lengkap** menggunakan Prisma Client & PostgreSQL:
  - `GET /students` — Menampilkan semua data mahasiswa
  - `GET /students/:id` — Menampilkan detail 1 mahasiswa
  - `POST /students` — Menambahkan data mahasiswa baru
  - `PATCH /students/:id` — Mengubah data / status presensi mahasiswa
  - `DELETE /students/:id` — Menghapus data mahasiswa
- **Query Lanjutan**:
  - `GET /students?status=Hadir` — Filter data berdasarkan status (`where`)
  - `GET /students/stats` — Statistik jumlah mahasiswa per status (`count`)

---

## Cara Menjalankan Proyek

### 1. Backend (`presensi-mahasiswa-backend`)
```bash
cd presensi-mahasiswa-backend
npm install
```
Buat/sesuaikan file `.env`:
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/datasiswa?schema=public"
PORT=3000
```
Jalankan migrasi Prisma dan nyalakan server:
```bash
npx prisma migrate dev --name init
npm run start:dev
```
Backend berjalan di `http://localhost:3000`.

### 2. Frontend (`presensi-mahasiswa-frontend`)
```bash
cd presensi-mahasiswa-frontend
npm install
npm run dev
```
Frontend berjalan di `http://localhost:5173`.

---

## Screenshot Dokumentasi

Seluruh dokumentasi screenshot (setup database & migrasi Prisma, pengujian CRUD & query lanjutan di Postman, serta tampilan aplikasi desktop & mobile) tersedia pada file berikut:

📄 **[Lihat Dokumentasi Screenshot (PDF)](docs/screenshot.pdf)**
