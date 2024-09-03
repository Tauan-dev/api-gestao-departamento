import { IsNumber, IsString } from 'class-validator';

export class CreateProfessor {
  @IsNumber()
  readonly matricula: number;

  @IsString()
  readonly nome: string;

  @IsNumber()
  readonly carga_horaria: number;

  @IsString()
  readonly img: string;
}
