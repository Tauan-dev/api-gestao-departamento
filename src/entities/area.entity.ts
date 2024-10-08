import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Departamento } from './departamento.entity';
import { Professor } from './professor.entity';
import { Disciplina } from './disciplina.entity';

@Entity('area')
export class Area {
  @PrimaryColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  img: string;

  @ManyToOne(() => Departamento, (departamento) => departamento.areas)
  departamento: Departamento;

  @OneToOne(() => Professor)
  @JoinColumn({ name: 'coordAreaMatricula' })
  coordAreaMatricula: Professor;

  @OneToMany(() => Professor, (professor) => professor.area)
  professores: Professor[];

  @OneToMany(() => Disciplina, (disciplina) => disciplina.area)
  disciplinas: Disciplina[];
}
