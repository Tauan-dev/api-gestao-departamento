import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddDisciplinaIdToTurmaTable1726757954223
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'turma',
      new TableColumn({
        name: 'disciplinaToTurmaId',
        type: 'integer',
      }),
    );

    await queryRunner.createForeignKey(
      'turma',
      new TableForeignKey({
        name: 'FK_disciplina_turma_id',
        columnNames: ['disciplinaToTurmaId'],
        referencedTableName: 'disciplina',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('turma', 'FK_disciplina_turma_id');
    await queryRunner.dropColumn('turma', 'disciplinaToTurmaId');
  }
}
