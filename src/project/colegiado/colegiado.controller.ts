// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Controller, Get, Param } from '@nestjs/common';
import { ColegiadoService } from './colegiado.service';

@Controller('colegiado')
export class ColegiadoController {
  constructor(private readonly colegiadoService: ColegiadoService) {}

  @Get()
  findAll() {
    return this.colegiadoService.findAll(); // Método que retorna todos os colegiados
  }

  @Get('curso/:id')
  findOne(@Param('id') id: number) {
     return this.colegiadoService.findOne(id);
   }

  @Get(':colegiadoId')
  findDisciplinaByCurso(@Param('colegiadoId') colegiadoId: number) {
    return this.colegiadoService.findDisciplinaByCurso(colegiadoId);
  }
}
