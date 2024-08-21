import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Turma } from './turma.entity';

@Entity('semestre')
export class Semestre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  semestre: string;

  @OneToMany(() => Turma, (turma) => turma.semestre)
  turmas: Turma[];
}
