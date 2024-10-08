import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Colegiado } from 'src/entities/colegiado.entity';
import { Curso } from 'src/entities/curso.entity';
import { Disciplina } from 'src/entities/disciplina.entity';
import { Horario } from 'src/entities/horario.entity';
import { Semestre } from 'src/entities/semestre.entity';
import { Turma } from 'src/entities/turma.entity';
import { TurmaController } from './turma.controller';
import { TurmaService } from './turma.service';
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
  controllers: [TurmaController],
  providers: [TurmaService],
  exports: [
    TurmaService,
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
export class TurmaModule {}
