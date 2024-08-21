import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('horario')
export class Horario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  horario: string;

  @Column()
  dia: string;
}
