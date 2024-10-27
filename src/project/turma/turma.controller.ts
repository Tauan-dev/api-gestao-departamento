import { Body, Controller, Get, Post } from '@nestjs/common';
import { TurmaService } from './turma.service';
import { CreateTurma } from 'src/dto/create-turma.dto';

@Controller('turma')
export class TurmaController {
  constructor(private readonly turmaService: TurmaService) {}

  @Post()
  async createTurma(@Body() createTurma: CreateTurma) {
    return this.turmaService.createTurma(createTurma);
  }

  @Get('todoshorarios')
  async findHorario() {
    return this.turmaService.findHorario();
  }

  @Post('horario')
  async alocarHorariosTurma(
    @Body('turmaId') turmaId: number,
    @Body('horariosIds') horariosIds: number[],
  ) {
    return this.turmaService.alocarHorariosTurma(turmaId, horariosIds);
  }

  //@Body('turmaId'): Extrai o campo turmaId do corpo da requisição diretamente como um número.
  //@Body('horariosIds'): Extrai o campo horariosIds como um array de números.
}
