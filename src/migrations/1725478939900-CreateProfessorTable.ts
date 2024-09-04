import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProfessorTable1725478939900 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'professor',
        columns: [
          {
            name: 'matricula',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'carga_horaria',
            type: 'varchar',
          },
          {
            name: 'img',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('professor');
  }
}
