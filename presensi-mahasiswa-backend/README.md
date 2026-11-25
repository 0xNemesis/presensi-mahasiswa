# Presensi Mahasiswa Backend (NestJS + Prisma + PostgreSQL)

Backend RESTful API dengan struktur arsitektur **MVC (Model-View-Controller)** menggunakan **NestJS**, **Prisma ORM**, dan **PostgreSQL** untuk manajemen data presensi mahasiswa.

## Fitur Endpoint API
- `GET /students` — Menampilkan daftar semua mahasiswa
- `GET /students?status=Hadir` — Filter mahasiswa berdasarkan status (`where`)
- `GET /students/stats` — Statistik jumlah presensi (`count`)
- `GET /students/:id` — Menampilkan detail 1 mahasiswa
- `POST /students` — Menambahkan mahasiswa baru
- `PATCH /students/:id` — Mengupdate data/status presensi mahasiswa
- `DELETE /students/:id` — Menghapus data mahasiswa

---

## Langkah Menjalankan Project

### 1. Install Dependencies
```bash
npm install
```

### 2. Konfigurasi Database (`.env`)
Buka file `.env`, lalu sesuaikan `DATABASE_URL` dengan PostgreSQL lokal Anda:
```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/datasiswa?schema=public"
PORT=3000
```

### 3. Migrasi Schema ke Database (Prisma)
```bash
npx prisma migrate dev --name init
```

### 4. Jalankan Server
```bash
npm run start:dev
```
Server akan aktif di `http://localhost:3000`.
