import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Departamento } from './departamento.entity';

@Entity('professor')
export class Professor {
  @PrimaryColumn()
  matricula: number;

  @Column()
  nome: string;

  @Column()
  carga_horaria: number;

  @Column()
  img: string;

  @ManyToOne(() => Departamento, (departamento) => departamento.professores)
  departamento: Departamento;
}
