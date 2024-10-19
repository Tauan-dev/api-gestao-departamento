import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Area } from 'src/entities/area.entity';
import { Curso } from 'src/entities/curso.entity';
import { Disciplina } from 'src/entities/disciplina.entity';
import { Professor } from 'src/entities/professor.entity';
import { Turma } from 'src/entities/turma.entity';
import { AreaController } from './area.controller';
import { AreaService } from './area.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Area, Professor, Turma, Disciplina, Curso]),
  ],
  controllers: [AreaController],
  providers: [AreaService],
  exports: [
    AreaService,
    TypeOrmModule.forFeature([Area, Professor, Turma, Disciplina, Curso]),
  ],
})
export class AreaModule {}
