import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateAreaTable1725473042550 } from 'src/migrations/1725473042550-CreateAreaTable';
import { CreateColegiadoTable1725475722321 } from 'src/migrations/1725475722321-CreateColegiadoTable';
import { CreateCursoTable1725476167598 } from 'src/migrations/1725476167598-CreateCursoTable';
import { CreateDepartamentoTable1725476689974 } from 'src/migrations/1725476689974-CreateDepartamentoTable';
import { CreateDisciplinaTable1725477146996 } from 'src/migrations/1725477146996-CreateDisciplinaTable';
import { CreateHorarioTable1725478734217 } from 'src/migrations/1725478734217-CreateHorarioTable';
import { CreateProfessorTable1725478939900 } from 'src/migrations/1725478939900-CreateProfessorTable';
import { CreateSemestreTable1725482493400 } from 'src/migrations/1725482493400-CreateSemestreTable';
import { CreateTurmaTable1725482675430 } from 'src/migrations/1725482675430-CreateTurmaTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateAreaTable1725473042550,
    CreateColegiadoTable1725475722321,
    CreateCursoTable1725476167598,
    CreateDepartamentoTable1725476689974,
    CreateDisciplinaTable1725477146996,
    CreateHorarioTable1725478734217,
    CreateProfessorTable1725478939900,
    CreateSemestreTable1725482493400,
    CreateTurmaTable1725482675430,
  ],
});
