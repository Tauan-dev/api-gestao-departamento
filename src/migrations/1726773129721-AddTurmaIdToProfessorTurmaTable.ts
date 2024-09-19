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
        name: 'turmaToProfessorTurmaId',
        type: 'integer',
      }),
    );

    await queryRunner.createForeignKey(
      'professor_turma',
      new TableForeignKey({
        name: 'FK_turma_professor_turma_id',
        columnNames: ['turmaToProfessorTurmaId'],
        referencedTableName: 'turma',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'professor_turma',
      'FK_turma_professor_professor_id',
    );
    await queryRunner.dropColumn('professor_turma', 'turmaToProfessorTurmaId');
  }
}
