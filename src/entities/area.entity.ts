import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Departamento } from './departamento.entity';

@Entity('area')
export class Area {
  @PrimaryColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  img: string;

  @ManyToOne(() => Departamento, (departamento) => departamento.areas)
  departamento: Departamento;
}
