import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddDisciplinaIdToCursoDisciplinaTable1726770848631
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'curso_disciplina',
      new TableColumn({
        name: 'disciplinaId',
        type: 'integer',
      }),
    );

    await queryRunner.createForeignKey(
      'curso_disciplina',
      new TableForeignKey({
        name: 'FK_disciplina_id',
        columnNames: ['disciplinaId'],
        referencedTableName: 'disciplina',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('curso_disciplina', 'FK_disciplina_id');

    await queryRunner.dropColumn('curso_disciplina', 'disciplinaId');
  }
}
