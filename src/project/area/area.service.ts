import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Area } from 'src/entities/area.entity';
import { Professor } from 'src/entities/professor.entity';
import { Turma } from 'src/entities/turma.entity';
import { Repository } from 'typeorm';
import { ColegiadoService } from '../colegiado/colegiado.service';

@Injectable()
export class AreaService {
  constructor(
    @InjectRepository(Area)
    private readonly areaRepository: Repository<Area>,

    @InjectRepository(Professor)
    private readonly professorRepository: Repository<Professor>,

    @InjectRepository(Turma)
    private readonly turmaRepository: Repository<Turma>,

    private readonly colegiadoService: ColegiadoService,
  ) {}

  async findTurmasByArea(areaIds: number): Promise<Turma[]> {
    // Primeiro, encontramos o semestre mais atual
    const semestreAtual = await this.colegiadoService.findSemestreAtual();

    // Agora, buscamos as turmas associadas à área e ao semestre atual
    return await this.turmaRepository.find({
      where: {
        semestre: { id: semestreAtual.id }, // Filtra pelo semestre mais atual
        disciplina: {
          area: { id: areaIds }, // Filtra pela área
        },
      },
      relations: [
        'disciplina',
        'disciplina.cursos',
        'horarios',
        'disciplina.area',
        'semestre', // Relaciona o semestre para garantir que o filtro funcione corretamente
      ],
    });
  }

  async findAllAreas() {
    return await this.areaRepository.find();
  }

  async findProfessorByArea(areaId: number) {
    return await this.professorRepository.find({
      where: {
        area: { id: areaId },
      },
    });
  }

  async alocarProfessorNaTurma(
    turmaId: number,
    professorId: number,
  ): Promise<Turma> {
    // Busca a turma com as relações necessárias
    const turma = await this.turmaRepository.findOne({
      where: { id: turmaId },
      relations: ['professores'], // Carrega os professores já associados
    });

    // Busca o professor
    const professor = await this.professorRepository.findOne({
      where: { matricula: professorId }, // Busca o professor pela matrícula
    });

    // Associa o professor à turma
    turma.professores.push(professor);

    // Salva a turma com o professor associado
    return await this.turmaRepository.save(turma);
  }
}
