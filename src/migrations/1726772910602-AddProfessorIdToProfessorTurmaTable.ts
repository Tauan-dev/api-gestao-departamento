import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddProfessorIdToProfessorTurmaTable1726772910602
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'professor_turma',
      new TableColumn({
        name: 'professorToProfessorTurmaId',
        type: 'integer',
      }),
    );

    await queryRunner.createForeignKey(
      'professor_turma',
      new TableForeignKey({
        name: 'FK_professor_professor_turma_id',
        columnNames: ['professorToProfessorTurmaId'],
        referencedTableName: 'professor',
        referencedColumnNames: ['matricula'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'professor_turma',
      'FK_professor_professor_turma_id',
    );
    await queryRunner.dropColumn(
      'professor_turma',
      'professorToProfessorTurmaId',
    );
  }
}
