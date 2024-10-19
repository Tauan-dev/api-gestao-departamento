import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ColegiadoController } from './project/colegiado/colegiado.controller';
import { ColegiadoModule } from './project/colegiado/colegiado.module';
import { TurmaController } from './project/turma/turma.controller';
import { TurmaModule } from './project/turma/turma.module';
import { AreaController } from './project/area/area.controller';
import { ColegiadoService } from './project/colegiado/colegiado.service';
import { TurmaService } from './project/turma/turma.service';
import { AreaService } from './project/area/area.service';
import { AreaModule } from './project/area/area.module';

@Module({
  imports: [DatabaseModule, ColegiadoModule, TurmaModule, AreaModule],
  controllers: [
    AppController,
    ColegiadoController,
    TurmaController,
    AreaController,
  ],
  providers: [AppService, ColegiadoService, TurmaService, AreaService],
})
export class AppModule {}
