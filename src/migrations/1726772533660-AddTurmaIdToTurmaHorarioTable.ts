import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddTurmaIdToTurmaHorarioTable1726772533660
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'turma_horario',
      new TableColumn({
        name: 'turmaToTurmaHorarioId',
        type: 'integer',
      }),
    );

    await queryRunner.createForeignKey(
      'turma_horario',
      new TableForeignKey({
        name: 'FK_turma_turma_horario_id',
        columnNames: ['turmaToTurmaHorarioId'],
        referencedTableName: 'turma',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'turma_horario',
      'FK_turma_turma_horario_id',
    );

    await queryRunner.dropColumn('turma_horario', 'turmaToTurmaHorarioId');
  }
}
