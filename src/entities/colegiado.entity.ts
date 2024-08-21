import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('colegiado')
export class Colegiado {
  @PrimaryColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  img: string;
}
