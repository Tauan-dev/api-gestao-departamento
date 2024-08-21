import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('area')
export class Area {
  @PrimaryColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  img: string;
}
