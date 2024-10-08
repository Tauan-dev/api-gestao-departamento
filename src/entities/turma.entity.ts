import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Semestre } from './semestre.entity';
import { Disciplina } from './disciplina.entity';
import { Horario } from './horario.entity';
import { Professor } from './professor.entity';

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

  @ManyToOne(() => Semestre, (semestre) => semestre.turmas)
  @JoinColumn({ name: 'semestreId' })
  semestre: Semestre;

  @ManyToOne(() => Disciplina, (disciplina) => disciplina.turmas)
  @JoinColumn({ name: 'disciplinaToTurmaId' })
  disciplina: Disciplina;

  @ManyToMany(() => Horario, (horario) => horario.turmas)
  @JoinTable({
    name: 'turma_horario',
    joinColumn: {
      name: 'turmaToTurmaHorarioId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'horarioToTurmaHorarioId',
      referencedColumnName: 'id',
    },
  })
  horarios: Horario[];

  @ManyToMany(() => Professor, (professor) => professor.turmas)
  professores: Professor[];
}
