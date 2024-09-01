import { IsNumber, IsString } from 'class-validator';

export class CreateDepartamento {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly sigla: string;

  @IsString()
  readonly name: string;

  @IsString()
  readonly img: string;
}
