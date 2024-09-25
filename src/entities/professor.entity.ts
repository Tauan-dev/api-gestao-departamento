import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Departamento } from './departamento.entity';
import { Area } from './area.entity';
import { Turma } from './turma.entity';

@Entity('professor')
export class Professor {
  @PrimaryGeneratedColumn()
  matricula: number;

  @Column()
  nome: string;

  @Column()
  carga_horaria: number;

  @Column()
  img: string;

  @ManyToOne(() => Departamento, (departamento) => departamento.professores)
  departamento: Departamento;

  @ManyToOne(() => Area, (area) => area.professores)
  area: Area;

  @JoinTable()
  @ManyToMany(() => Turma, (turma) => turma.professores)
  turmas: Turma;
}
