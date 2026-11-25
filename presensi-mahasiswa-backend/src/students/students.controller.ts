import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { StudentsService } from './students.service.js';
import { CreateStudentDto } from './dto/create-student.dto.js';
import { UpdateStudentDto } from './dto/update-student.dto.js';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  // GET /students?status=Hadir - View semua data mahasiswa (opsional filter status)
  @Get()
  findAll(@Query('status') status?: string) {
    return this.studentsService.findAll(status);
  }

  // GET /students/stats - Statistik jumlah presensi mahasiswa (harus di atas :id)
  @Get('stats')
  getStats() {
    return this.studentsService.getStats();
  }

  // GET /students/:id - View 1 data mahasiswa
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.studentsService.findOne(id);
  }

  // POST /students - Tambah data mahasiswa
  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  // PATCH /students/:id - Update data mahasiswa
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return this.studentsService.update(id, updateStudentDto);
  }

  // DELETE /students/:id - Hapus data mahasiswa
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.studentsService.remove(id);
  }
}
