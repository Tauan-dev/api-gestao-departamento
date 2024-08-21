import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('disciplina')
export class Disciplina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cod: string;

  @Column()
  nome: string;

  @Column()
  periodo: string;

  @Column()
  cargaHoraria: number;

  @Column()
  qt_credito: number;
}
