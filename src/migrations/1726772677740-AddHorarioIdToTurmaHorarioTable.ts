import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddHorarioIdToTurmaHorarioTable1726772677740
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'turma_horario',
      new TableColumn({
        name: 'horarioToTurmaHorarioId',
        type: 'integer',
      }),
    );

    await queryRunner.createForeignKey(
      'turma_horario',
      new TableForeignKey({
        name: 'FK_horario_turma_horario_id',
        columnNames: ['horarioToTurmaHorarioId'],
        referencedTableName: 'horario',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'turma_horario',
      'FK_horario_turma_horario_id',
    );
    await queryRunner.dropColumn('turma_horario', 'horarioToTurmaHorarioId');
  }
}
