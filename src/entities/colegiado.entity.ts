import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { Professor } from './professor.entity';
import { Curso } from './curso.entity';

@Entity('colegiado')
export class Colegiado {
  @PrimaryColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  img: string;

  @OneToOne(() => Professor)
  @JoinColumn({ name: 'coordenador_colegiado' })
  coordenador_colegiado: Professor;

  @OneToMany(()=>Curso, (curso)=> curso.colegiado)
  cursos:Curso[];
}
