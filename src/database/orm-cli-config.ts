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
import { AddDeptoIdToAreaTable1725651103783 } from 'src/migrations/1725651103783-AddDeptoIdToAreaTable';
import { AddProfessorMatriculaToAreaTable1725651601107 } from 'src/migrations/1725651601107-AddProfessorMatriculaToAreaTable';
import { AddProfessorMatriculaToColegiadoTable1725652854374 } from 'src/migrations/1725652854374-AddProfessorMatriculaToColegiadoTable';
import { AddProfessorMatriculaToDepartamentoTable1725654543960 } from 'src/migrations/1725654543960-AddProfessorMatriculaToDepartamentoTable';
import { AddAreaIdToDisciplinaTable1725656105239 } from 'src/migrations/1725656105239-AddAreaIdToDisciplinaTable';
import { AddAreaIdToProfessorTable1726755812054 } from 'src/migrations/1726755812054-AddAreaIdToProfessorTable';
import { AddColegiadoIdToCursoTable1726757107749 } from 'src/migrations/1726757107749-AddColegiadoIdToCursoTable';
import { AddDeptoIdToProfessorTable1726757495247 } from 'src/migrations/1726757495247-AddDeptoIdToProfessorTable';
import { AddDisciplinaIdToTurmaTable1726757954223 } from 'src/migrations/1726757954223-AddDisciplinaIdToTurmaTable';
import { AddSemestreIdToTurmaTable1726758500033 } from 'src/migrations/1726758500033-AddSemestreIdToTurmaTable';
import { CreateCursoDisciplinaTable1726769425989 } from 'src/migrations/1726769425989-CreateCursoDisciplinaTable';
import { AddCursoIdToCursoDisciplinaTable1726770037396 } from 'src/migrations/1726770037396-AddCursoIdToCursoDisciplinaTable';
import { AddDisciplinaIdToCursoDisciplinaTable1726770848631 } from 'src/migrations/1726770848631-AddDisciplinaIdToCursoDisciplinaTable';
import { CreateTurmaHorarioTable1726772367674 } from 'src/migrations/1726772367674-CreateTurmaHorarioTable';
import { AddTurmaIdToTurmaHorarioTable1726772533660 } from 'src/migrations/1726772533660-AddTurmaIdToTurmaHorarioTable';
import { AddHorarioIdToTurmaHorarioTable1726772677740 } from 'src/migrations/1726772677740-AddHorarioIdToTurmaHorarioTable';
import { CreateProfessorTurmaTable1726772806177 } from 'src/migrations/1726772806177-CreateProfessorTurmaTable';
import { AddProfessorIdToProfessorTurmaTable1726772910602 } from 'src/migrations/1726772910602-AddProfessorIdToProfessorTurmaTable';
import { AddTurmaIdToProfessorTurmaTable1726773129721 } from 'src/migrations/1726773129721-AddTurmaIdToProfessorTurmaTable';

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
    AddDeptoIdToAreaTable1725651103783,
    AddProfessorMatriculaToAreaTable1725651601107,
    AddProfessorMatriculaToColegiadoTable1725652854374,
    AddProfessorMatriculaToDepartamentoTable1725654543960,
    AddAreaIdToDisciplinaTable1725656105239,
    AddAreaIdToProfessorTable1726755812054,
    AddColegiadoIdToCursoTable1726757107749,
    AddDeptoIdToProfessorTable1726757495247,
    AddDisciplinaIdToTurmaTable1726757954223,
    AddSemestreIdToTurmaTable1726758500033,
    CreateCursoDisciplinaTable1726769425989,
    AddCursoIdToCursoDisciplinaTable1726770037396,
    AddDisciplinaIdToCursoDisciplinaTable1726770848631,
    CreateTurmaHorarioTable1726772367674,
    AddTurmaIdToTurmaHorarioTable1726772533660,
    AddHorarioIdToTurmaHorarioTable1726772677740,
    CreateProfessorTurmaTable1726772806177,
    AddProfessorIdToProfessorTurmaTable1726772910602,
    AddTurmaIdToProfessorTurmaTable1726773129721,
  ],
});
