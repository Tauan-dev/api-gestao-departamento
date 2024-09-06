import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddAreaIdToDisciplinaTable1725656105239
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'disciplina',
      new TableColumn({
        name: 'areaId',
        type: 'integer',
      }),
    );

    await queryRunner.createForeignKey(
      'disciplina',
      new TableForeignKey({
        name: 'FK_area_id',
        columnNames: ['areaId'],
        referencedTableName: 'area',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('disciplina', 'FK_area_id');

    await queryRunner.dropColumn('disciplina', 'areaId');
  }
}
