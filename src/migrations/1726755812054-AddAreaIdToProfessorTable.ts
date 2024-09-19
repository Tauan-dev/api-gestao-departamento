import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddAreaIdToProfessorTable1726755812054
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'professor',
      new TableColumn({
        name: 'areaId',
        type: 'integer',
      }),
    );

    await queryRunner.createForeignKey(
      'professor',
      new TableForeignKey({
        name: 'FK_area_professor_id',
        columnNames: ['areaId'],
        referencedTableName: 'area',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('professor', 'FK_area_professor_id');

    await queryRunner.dropColumn('professor', 'areaId');
  }
}
