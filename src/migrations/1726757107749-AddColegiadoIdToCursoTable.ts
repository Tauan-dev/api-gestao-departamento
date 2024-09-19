import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddColegiadoIdToCursoTable1726757107749
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'curso',
      new TableColumn({
        name: 'colegiadoId',
        type: 'integer',
      }),
    );

    await queryRunner.createForeignKey(
      'curso',
      new TableForeignKey({
        name: 'FK_colegiado_curso_id',
        columnNames: ['colegiadoId'],
        referencedTableName: 'colegiado',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('curso', 'FK_colegiado_curso_id');
    await queryRunner.dropColumn('curso', 'colegiadoId');
  }
}
