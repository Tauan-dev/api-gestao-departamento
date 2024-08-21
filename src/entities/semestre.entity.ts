import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('semestre')
export class Semestre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  semestre: string;
}
