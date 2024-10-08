import { IsNumber, IsString } from 'class-validator';

export class CreateDisciplinas {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly cod: string;

  @IsString()
  readonly nome: string;

  @IsNumber()
  readonly cargaHoraria: number;

  @IsNumber()
  readonly cargaHorariaSemanal: number;

  @IsNumber()
  readonly areaId: number;
}
