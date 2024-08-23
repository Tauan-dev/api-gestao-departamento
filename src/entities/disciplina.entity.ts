import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Area } from './area.entity';
import { Turma } from './turma.entity';
import { Curso } from './curso.entity';

@Entity('disciplina')
export class Disciplina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cod: string;

  @Column()
  nome: string;

  @Column()
  periodo: string;

  @Column()
  cargaHoraria: number;

  @Column()
  qt_credito: number;

  @ManyToOne(() => Area, (area) => area.disciplinas)
  area: Area;

  @OneToMany(() => Turma, (turma) => turma.disciplina)
  turmas: Turma[];

  @ManyToMany(() => Curso, (curso) => curso.disciplinas)
  cursos: Curso[];
}
