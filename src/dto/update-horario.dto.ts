import { PartialType } from '@nestjs/mapped-types';
import { CreateHorario } from './create-horario.dto';

export class UpdateHorario extends PartialType(CreateHorario) {}
