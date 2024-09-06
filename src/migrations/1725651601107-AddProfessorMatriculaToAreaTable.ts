import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddProfessorMatriculaToAreaTable1725651601107
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'area',
      new TableColumn({
        name: 'coordAreaMatricula',
        type: 'varchar',
      }),
    );

    await queryRunner.createForeignKey(
      'area',
      new TableForeignKey({
        name: 'FK_professor_matricula',
        columnNames: ['coordAreaMatricula'],
        referencedTableName: 'professor',
        referencedColumnNames: ['matricula'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('area', 'FK_professor_matricula');

    await queryRunner.dropColumn('area', 'coordAreaMatricula');
  }
}
