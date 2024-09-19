import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddCursoIdToCursoDisciplinaTable1726770037396
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'curso_disciplina',
      new TableColumn({
        name: 'cursoToCursoDisciplinaId',
        type: 'integer',
      }),
    );

    await queryRunner.createForeignKey(
      'curso_disciplina',
      new TableForeignKey({
        name: 'FK_curso_curso_disciplina_id',
        columnNames: ['cursoToCursoDisciplinaId'],
        referencedTableName: 'curso',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'curso_disciplina',
      'FK_curso_curso_disciplina_id',
    );
    await queryRunner.dropColumn(
      'curso_disciplina',
      'cursoToCursoDisciplinaId',
    );
  }
}
