import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateTurma {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly cod: string;

  @IsString()
  readonly observacao: string;

  @IsBoolean()
  readonly formando: boolean;
}
