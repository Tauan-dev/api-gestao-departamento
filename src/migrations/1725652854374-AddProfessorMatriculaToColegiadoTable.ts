import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddProfessorMatriculaToColegiadoTable1725652854374
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'colegiado',
      new TableColumn({
        name: 'coordColegiadoMatricula',
        type: 'integer',
      }),
    );

    await queryRunner.createForeignKey(
      'colegiado',
      new TableForeignKey({
        name: 'FK_professor_colegiado_matricula',
        columnNames: ['coordColegiadoMatricula'],
        referencedTableName: 'professor',
        referencedColumnNames: ['matricula'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'colegiado',
      'FK_professor_colegiado_matricula',
    );

    await queryRunner.dropColumn('colegiado', 'coordColegiadoMatricula');
  }
}
