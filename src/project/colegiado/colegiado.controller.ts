// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ColegiadoService } from './colegiado.service';
import { CreateSemestre } from 'src/dto/create-semestre.dto';

@Controller('colegiado')
export class ColegiadoController {
  constructor(private readonly colegiadoService: ColegiadoService) {}

  @Get()
  findAll() {
    return this.colegiadoService.findAll(); // Método que retorna todos os colegiados
  }

  @Get('semestre')
  findAllSemestre() {
    return this.colegiadoService.findAllSemestre(); //
  }

  @Get('semestre/:id')
  findOneSemestre(@Param('id') id: number) {
    return this.colegiadoService.findOneSemestre(id);
  }

  @Post('createSemestre')
  async createSemestre(@Body() createSemestre: CreateSemestre) {
    return this.colegiadoService.createSemestre(createSemestre);
  }

  @Get('semestreAtual')
  findSemestreAtual() {
    return this.colegiadoService.findSemestreAtual();
  }

  @Get('curso/:id')
  findOne(@Param('id') id: number) {
    return this.colegiadoService.findOne(id);
  }

  @Get('turma/:colegiadoId')
  findTurmasByCoelgiado(@Param('colegiadoId') colegiadoId: number) {
    return this.colegiadoService.findTurmasByColegiado(colegiadoId);
  }

  @Get(':colegiadoId')
  findDisciplinaByCurso(@Param('colegiadoId') colegiadoId: number) {
    return this.colegiadoService.findDisciplinaByCurso(colegiadoId);
  }
}
