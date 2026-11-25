import { IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  nim: string;

  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsOptional()
  @IsString()
  @IsIn(['Hadir', 'Izin', 'Sakit', 'Alpha'])
  status?: string;
}
