import { IsNumber, IsString } from 'class-validator';

export class CreateArea {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly nome: string;

  @IsString()
  readonly img: string;

  @IsNumber()
  readonly departamentoId: number;

  @IsNumber()
  readonly coordAreaMatriculaId: number;
}
