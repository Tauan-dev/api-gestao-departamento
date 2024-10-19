import { MigrationInterface, QueryRunner, TableIndex } from 'typeorm';

export class AddUniqueToTurma1729216726466 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createIndex(
      'turma',
      new TableIndex({
        name: 'IDX_UNIQUE_TURMA',
        columnNames: ['cod', 'disciplinaToTurmaId', 'semestreId'],
        isUnique: true, // Define como um índice exclusivo
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('turma', 'IDX_UNIQUE_TURMA');
  }
}
