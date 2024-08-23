import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Colegiado } from './colegiado.entity';
import { Disciplina } from './disciplina.entity';

@Entity('curso')
export class Curso {
  @PrimaryColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  tipo: string;

  @ManyToOne(() => Colegiado, (colegiado) => colegiado.cursos)
  colegiado: Colegiado;

  @JoinTable()
  @ManyToMany(() => Disciplina, (disciplina) => disciplina.cursos)
  disciplinas: Disciplina[];
}
