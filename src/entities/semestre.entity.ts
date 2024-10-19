import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Turma } from './turma.entity';

@Entity('semestre')
export class Semestre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 5, scale: 1 })
  semestre: number;

  @OneToMany(() => Turma, (turma) => turma.semestre)
  turmas: Turma[];
}
