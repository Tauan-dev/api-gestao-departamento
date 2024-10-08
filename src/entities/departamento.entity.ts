import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Professor } from './professor.entity';
import { Area } from './area.entity';

@Entity('departamento')
export class Departamento {
  @PrimaryColumn()
  id: number;

  @Column()
  sigla: string;

  @Column()
  nome: string;

  @Column()
  img: string;

  @OneToMany(() => Professor, (professor) => professor.departamento)
  professores: Professor[];

  @OneToOne(() => Professor)
  @JoinColumn({ name: 'coordDepartamentoMatricula' })
  coordDepartamentoMatricula: Professor;

  @OneToMany(() => Area, (area) => area.departamento)
  areas: Area[];
}
