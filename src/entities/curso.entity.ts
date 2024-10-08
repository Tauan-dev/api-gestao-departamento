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

  @ManyToMany(() => Disciplina, (disciplina) => disciplina.cursos)
  @JoinTable({
    name: 'curso_disciplina', // Nome da tabela de junção
    joinColumn: {
      name: 'cursoToCursoDisciplinaId',
      referencedColumnName: 'id',
    }, // Referência para a chave estrangeira do curso
    inverseJoinColumn: {
      name: 'disciplinaToCursoDisciplinaId',
      referencedColumnName: 'id',
    }, // Referência para a chave estrangeira da disciplina
  })
  disciplinas: Disciplina[];
}
