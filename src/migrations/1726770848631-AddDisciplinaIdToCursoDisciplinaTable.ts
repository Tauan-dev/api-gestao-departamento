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
        name: 'disciplinaToCursoDisciplinaId',
        type: 'integer',
      }),
    );

    await queryRunner.createForeignKey(
      'curso_disciplina',
      new TableForeignKey({
        name: 'FK_disciplina_curso_disciplina_id',
        columnNames: ['disciplinaToCursoDisciplinaId'],
        referencedTableName: 'disciplina',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'curso_disciplina',
      'FK_disciplina_curso_disciplina_id',
    );

    await queryRunner.dropColumn(
      'curso_disciplina',
      'disciplinaToCursoDisciplinaId',
    );
  }
}
