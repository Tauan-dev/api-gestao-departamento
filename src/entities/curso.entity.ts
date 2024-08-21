import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('curso')
export class Curso {
  @PrimaryColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  tipo: string;
}
