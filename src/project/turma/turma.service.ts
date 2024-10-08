import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTurma } from 'src/dto/create-turma.dto';
import { Horario } from 'src/entities/horario.entity';
import { Semestre } from 'src/entities/semestre.entity';
import { Turma } from 'src/entities/turma.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TurmaService {
  constructor(
    @InjectRepository(Turma)
    private readonly turmaRepository: Repository<Turma>,

    @InjectRepository(Semestre)
    private readonly semestreRepository: Repository<Semestre>,

    @InjectRepository(Horario)
    private readonly horarioRepository: Repository<Horario>,
  ) {}

  //todo create que recebe dados via body é uma Promise
  async createTurma(createTurma: CreateTurma): Promise<Turma> {
    console.log(createTurma);
    const turma = this.turmaRepository.create({
      id: createTurma.id,
      cod: createTurma.cod,
      observacao: createTurma.observacao,
      formando: createTurma.formando,
      disciplina: { id: createTurma.disciplinaToTurmaId },
      semestre: { id: createTurma.semestreId },
    });

    return await this.turmaRepository.save(turma);
  }

  // trabalhar com uma tabela de associação, ou seja n:n é necessário relations
  async alocarHorariosTurma(
    turmaId: number,
    horariosIds: number[],
  ): Promise<Turma> {
    const turma = await this.turmaRepository.findOne({
      where: { id: turmaId },
      relations: ['horarios'],
    });

    const horarios = await this.horarioRepository.findByIds(horariosIds);

    turma.horarios = [...turma.horarios, ...horarios];

    return await this.turmaRepository.save(turma);
  }
}
