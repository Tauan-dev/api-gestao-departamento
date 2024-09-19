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
        name: 'professorId',
        type: 'integer',
      }),
    );

    await queryRunner.createForeignKey(
      'professor_turma',
      new TableForeignKey({
        name: 'FK_professor_id',
        columnNames: ['professorId'],
        referencedTableName: 'professor',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('professor_turma', 'FK_professor_id');
    await queryRunner.dropColumn('professor_turma', 'professorId');
  }
}
