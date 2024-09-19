import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddTurmaIdToProfessorTurmaTable1726773129721
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'professor_turma',
      new TableColumn({
        name: 'turmaId',
        type: 'integer',
      }),
    );

    await queryRunner.createForeignKey(
      'professor_turma',
      new TableForeignKey({
        name: 'FK_turma_id',
        columnNames: ['turmaId'],
        referencedTableName: 'turma',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('professor_turma', 'FK_professor_id');
    await queryRunner.dropColumn('professor_turma', 'turmaId');
  }
}
