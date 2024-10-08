import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Colegiado } from 'src/entities/colegiado.entity';
import { Curso } from 'src/entities/curso.entity';
import { Disciplina } from 'src/entities/disciplina.entity';
import { Horario } from 'src/entities/horario.entity';
import { Semestre } from 'src/entities/semestre.entity';
import { Turma } from 'src/entities/turma.entity';
import { ColegiadoController } from './colegiado.controller';
import { ColegiadoService } from './colegiado.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Colegiado,
      Curso,
      Disciplina,
      Turma,
      Semestre,
      Horario,
    ]),
  ],
  controllers: [ColegiadoController],
  providers: [ColegiadoService],
  exports: [
    ColegiadoService,
    TypeOrmModule.forFeature([
      Colegiado,
      Curso,
      Disciplina,
      Turma,
      Semestre,
      Horario,
    ]),
  ],
})
export class ColegiadoModule {}
