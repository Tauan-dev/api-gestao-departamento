import {
  Column,
  Entity,
  JoinColumn,
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
  @JoinColumn({ name: 'departamentoToProfId' })
  departamento: Departamento;

  @ManyToOne(() => Area, (area) => area.professores)
  area: Area;

  @ManyToMany(() => Turma, (turma) => turma.professores)
  @JoinTable({
    name: 'professor_turma',
    joinColumn: {
      name: 'professorToProfessorTurmaId',
      referencedColumnName: 'matricula',
    },
    inverseJoinColumn: {
      name: 'turmaToProfessorTurmaId',
      referencedColumnName: 'id',
    },
  })
  turmas: Turma[];
}
