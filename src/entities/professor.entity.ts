import { Column, Entity, PrimaryColumn } from 'typeorm';

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
}
