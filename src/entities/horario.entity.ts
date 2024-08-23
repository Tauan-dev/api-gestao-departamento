import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Turma } from './turma.entity';

@Entity('horario')
export class Horario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  horario: string;

  @Column()
  dia: string;

  @ManyToMany(() => Turma, (turma) => turma.horarios)
  turmas: Turma[];
}
