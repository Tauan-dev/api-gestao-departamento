import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddSemestreIdToTurmaTable1726758500033
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'turma',
      new TableColumn({
        name: 'semestreId',
        type: ' integer',
      }),
    );

    await queryRunner.createForeignKey(
      'turma',
      new TableForeignKey({
        name: 'FK_semestre_id',
        columnNames: ['semestreId'],
        referencedTableName: 'semestre',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('turma', 'FK_semestre_id');
    await queryRunner.dropColumn('turma', 'semestreId');
  }
}
