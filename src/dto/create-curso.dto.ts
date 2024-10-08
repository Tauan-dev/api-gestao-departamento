import { IsNumber, IsString } from 'class-validator';

export class CreateCurso {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly tipo: string;

  @IsNumber()
  readonly colegiadoId: number;
}
