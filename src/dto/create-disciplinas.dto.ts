import { IsNumber, IsString } from 'class-validator';

export class CreateDisciplinas {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly cod: string;

  @IsString()
  readonly nome: string;

  @IsString()
  readonly periodo: string;

  @IsNumber()
  readonly cargaHoraria: number;

  @IsNumber()
  readonly qt_credito: number;
}
