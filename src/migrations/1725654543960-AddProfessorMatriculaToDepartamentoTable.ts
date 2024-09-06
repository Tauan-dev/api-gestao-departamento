import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddProfessorMatriculaToDepartamentoTable1725654543960
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'departamento',
      new TableColumn({
        name: 'coordDepartamentoMatricula',
        type: 'varchar',
      }),
    );

    await queryRunner.createForeignKey(
      'departamento',
      new TableForeignKey({
        name: 'FK_professor_matricula',
        columnNames: ['coordDepartamentoMatricula'],
        referencedTableName: 'professor',
        referencedColumnNames: ['matricula'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('departamento', 'FK_professor_matricula');

    await queryRunner.dropColumn('departamento', 'coordDepartamentoMatricula');
  }
}
