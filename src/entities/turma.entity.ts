import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Semestre } from './semestre.entity';

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
}
