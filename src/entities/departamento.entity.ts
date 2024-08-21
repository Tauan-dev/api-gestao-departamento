import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Professor } from './professor.entity';

@Entity('departamento')
export class Departamento {
  @PrimaryGeneratedColumn()
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
  @JoinColumn({ name: 'diretor_departamento' })
  diretor_departamento: Professor;

}
