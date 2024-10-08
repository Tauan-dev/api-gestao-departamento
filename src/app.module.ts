import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ColegiadoController } from './project/colegiado/colegiado.controller';
import { ColegiadoModule } from './project/colegiado/colegiado.module';
import { TurmaController } from './project/turma/turma.controller';
import { TurmaModule } from './project/turma/turma.module';

@Module({
  imports: [DatabaseModule, ColegiadoModule, TurmaModule],
  controllers: [AppController, ColegiadoController, TurmaController],
  providers: [AppService, ColegiadoController],
})
export class AppModule {}
