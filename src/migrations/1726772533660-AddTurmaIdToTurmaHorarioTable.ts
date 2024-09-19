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
        name: 'turmaId',
        type: 'integer',
      }),
    );

    await queryRunner.createForeignKey(
      'curso_disciplina',
      new TableForeignKey({
        name: 'FK_turma_id',
        columnNames: ['turmaId'],
        referencedTableName: 'turma',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('turma_horario', 'FK_turma_id');

    await queryRunner.dropColumn('turma_horario', 'turmaId');
  }
}
