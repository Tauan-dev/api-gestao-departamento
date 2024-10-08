import { IsNumber, IsString } from 'class-validator';

export class CreateColegiado {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly sigla: string;

  @IsString()
  readonly img: string;

  @IsNumber()
  readonly coordColegiadoMatricula: number;
}
