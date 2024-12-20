import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSemestre } from 'src/dto/create-semestre.dto';
import { Colegiado } from 'src/entities/colegiado.entity';
import { Curso } from 'src/entities/curso.entity';
import { Disciplina } from 'src/entities/disciplina.entity';
import { Horario } from 'src/entities/horario.entity';
import { Semestre } from 'src/entities/semestre.entity';
import { Turma } from 'src/entities/turma.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ColegiadoService {
  constructor(
    @InjectRepository(Colegiado)
    private readonly colegiadoRepository: Repository<Colegiado>,

    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>,

    @InjectRepository(Disciplina)
    private readonly disciplinaRepository: Repository<Disciplina>,

    @InjectRepository(Turma)
    private readonly turmaRepository: Repository<Turma>,

    @InjectRepository(Semestre)
    private readonly semestreRepository: Repository<Semestre>,

    @InjectRepository(Horario)
    private readonly horarioRepository: Repository<Horario>,
  ) {}

  //METHODS CRUDING

  async findAll() {
    return await this.colegiadoRepository.find();
  }

  async findOne(id: number) {
    const colegiado = await this.colegiadoRepository.findOne({ where: { id } });
    return colegiado;
  }

  async findDisciplinaByCurso(colegiadoId: number) {
    const cursos = await this.cursoRepository.find({
      where: { colegiado: { id: colegiadoId } }, // utilizado para filtrar os cursos pelo colegiado
      relations: ['disciplinas'], // nas relations você coloca somente os dados que deseja retorno
    });
    return cursos;
  }

  async findTurmasByColegiado(colegiadoId: number): Promise<Turma[]> {
    // Primeiro, encontramos o semestre mais atual
    const semestreAtual = await this.findSemestreAtual();

    // Agora, buscamos as turmas associadas ao colegiado e ao semestre mais atual
    return await this.turmaRepository.find({
      where: {
        semestre: { id: semestreAtual.id }, // Filtra pelo semestre mais atual
        disciplina: {
          cursos: { id: colegiadoId }, // Filtra pelo colegiado
        },
      },
      relations: ['disciplina', 'disciplina.cursos', 'semestre'], // Relaciona as entidades necessárias
    });
  }

  async findTurmasComProfessoresByColegiado(colegiadoId: number) {
    // Encontra o semestre atual
    const semestreAtual = await this.findSemestreAtual();

    // Agora faz a consulta de turmas, filtrando pelo semestre atual
    return await this.turmaRepository.find({
      where: {
        disciplina: {
          cursos: { id: colegiadoId },
        },
        semestre: semestreAtual, // Filtra pela turma do semestre atual
      },
      relations: [
        'disciplina', // Carrega a disciplina
        'disciplina.cursos', // Carrega os cursos associados à disciplina
        'horarios', // Carrega os horários das turmas
        'professores', // Carrega os professores associados à turma
      ],
    });
  }

  async findAllSemestre() {
    return await this.semestreRepository.find();
  }

  async findOneSemestre(id: number) {
    const semestre = await this.semestreRepository.findOne({ where: { id } });
    return semestre;
  }

  async findSemestreAtual(): Promise<Semestre> {
    const semestres = await this.semestreRepository.find({
      order: { semestre: 'DESC' }, // Ordena decrescentemente com base no valor do semestre
    });

    if (semestres.length === 0) {
      throw new Error('Nenhum semestre encontrado');
    }

    return semestres[0]; // Retorna o semestre mais recente
  }

  async createSemestre(createSemestre: CreateSemestre): Promise<Semestre> {
    const semestre = this.semestreRepository.create({
      semestre: createSemestre.semestre,
    }); // Cria uma instância do semestre
    return await this.semestreRepository.save(semestre); // Salva no banco de dados
  }
}
