import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('depto')
export class Depto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sigla: string;

  @Column()
  nome: string;

  @Column()
  img: string;
}
