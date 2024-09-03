import { PartialType } from '@nestjs/mapped-types';
import { CreateProfessor } from './create-professor.dto';

export class UpdateProfessor extends PartialType(CreateProfessor) {}
