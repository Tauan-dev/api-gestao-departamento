import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Semestre } from './semestre.entity';
import { Disciplina } from './disciplina.entity';
import { Horario } from './horario.entity';
import { Professor } from './professor.entity';

@Entity('turma')
export class Turma {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cod: string;

  @Column()
  observacao: string;

  @Column()
  formando: boolean;

  @Column()
  horario: string;

  @ManyToOne(() => Semestre, (semestre) => semestre.turmas)
  semestre: Semestre;

  @ManyToOne(() => Disciplina, (disciplina) => disciplina.turmas)
  disciplina: Disciplina;

  @JoinTable()
  @ManyToMany(() => Horario, (horario) => horario.turmas)
  horarios: Horario[];

  @ManyToMany(() => Professor, (professor) => professor.turmas)
  professores: Professor[];
}
