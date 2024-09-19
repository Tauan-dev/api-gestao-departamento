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
        name: 'horarioId',
        type: 'integer',
      }),
    );

    await queryRunner.createForeignKey(
      'turma_horario',
      new TableForeignKey({
        name: 'FK_horario_id',
        columnNames: ['horarioId'],
        referencedTableName: 'horario',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('turma_horario', 'FK_horario_id');
    await queryRunner.dropColumn('turma_horario', 'horarioId');
  }
}
