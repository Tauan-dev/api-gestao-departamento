import { IsNumber, IsString } from 'class-validator';

export class CreateColegiado {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly img: string;
}
