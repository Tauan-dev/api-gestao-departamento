import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AreaService } from './area.service';

@Controller('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @Get('/:areaIds')
  findTurmasByArea(@Param('areaIds') areaIds: number) {
    return this.areaService.findTurmasByArea(areaIds);
  }

  @Get()
  findAllAreas() {
    return this.areaService.findAllAreas();
  }

  @Get('professor/:areaId')
  findProfessorByArea(@Param('areaId') areaId: number) {
    return this.areaService.findProfessorByArea(areaId);
  }

  @Post('professor')
  async alocarProfessorNaTurma(
    @Body('turmaId') turmaId: number,
    @Body('professorId') professorId: number,
  ) {
    return this.areaService.alocarProfessorNaTurma(turmaId, professorId);
  }
}
