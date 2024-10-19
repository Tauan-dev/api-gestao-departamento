import { IsNumber, IsString } from 'class-validator';

export class CreateSemestre {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly semestre: number;
}
