import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('turmas')
export class Turmas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cod: string;

  @Column()
  observacao: string;

  @Column()
  formando: boolean;

  @Column()
  horario: string;
}
