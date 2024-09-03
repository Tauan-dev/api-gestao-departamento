import { IsNumber, IsString } from 'class-validator';

export class CreateHorario {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly horario: string;

  @IsString()
  readonly dia: string;
}
