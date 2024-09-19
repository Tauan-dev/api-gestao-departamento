import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddDeptoIdToAreaTable1725651103783 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'area',
      new TableColumn({
        name: 'departamentoId',
        type: 'integer',
      }),
    );

    await queryRunner.createForeignKey(
      'area',
      new TableForeignKey({
        name: 'FK_departamento_Id',
        columnNames: ['departamentoId'],
        referencedTableName: 'departamento',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('area', 'FK_departamento_ID');

    await queryRunner.dropColumn('area', 'departamentoId');
  }
}
