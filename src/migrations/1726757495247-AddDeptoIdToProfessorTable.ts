import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddDeptoIdToProfessorTable1726757495247
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'professor',
      new TableColumn({
        name: 'departamentoToProfId',
        type: 'integer',
      }),
    );

    await queryRunner.createForeignKey(
      'professor',
      new TableForeignKey({
        name: 'FK_departamento_professor_id',
        columnNames: ['departamentoToProfId'],
        referencedTableName: 'departamento',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'professor',
      'FK_departamento_professor_id',
    );
    await queryRunner.dropColumn('professor', 'departamentoToProfId');
  }
}
