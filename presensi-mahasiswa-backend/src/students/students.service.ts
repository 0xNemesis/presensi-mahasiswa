import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateStudentDto } from './dto/create-student.dto.js';
import { UpdateStudentDto } from './dto/update-student.dto.js';

@Injectable()
export class StudentsService {
  constructor(private readonly prisma: PrismaService) {}

  // 1. Ambil semua data student (opsional filter berdasarkan status)
  async findAll(status?: string) {
    return this.prisma.student.findMany({
      where: status ? { status } : undefined,
      orderBy: { createdAt: 'desc' },
    });
  }

  // 1b. Statistik jumlah mahasiswa berdasarkan status presensi (count)
  async getStats() {
    const [total, hadir, izin, sakit, alpha] = await Promise.all([
      this.prisma.student.count(),
      this.prisma.student.count({ where: { status: 'Hadir' } }),
      this.prisma.student.count({ where: { status: 'Izin' } }),
      this.prisma.student.count({ where: { status: 'Sakit' } }),
      this.prisma.student.count({ where: { status: 'Alpha' } }),
    ]);

    return { total, hadir, izin, sakit, alpha };
  }

  // 2. Ambil detail 1 student berdasarkan id
  async findOne(id: number) {
    const student = await this.prisma.student.findUnique({
      where: { id },
    });

    if (!student) {
      throw new NotFoundException(`Mahasiswa dengan ID ${id} tidak ditemukan`);
    }

    return student;
  }

  // 3. Tambah student baru
  async create(dto: CreateStudentDto) {
    return this.prisma.student.create({
      data: dto,
    });
  }

  // 4. Update status/data student
  async update(id: number, dto: UpdateStudentDto) {
    await this.findOne(id); // Pastikan data ada sebelum update
    return this.prisma.student.update({
      where: { id },
      data: dto,
    });
  }

  // 5. Hapus data student
  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.student.delete({
      where: { id },
    });
  }
}
