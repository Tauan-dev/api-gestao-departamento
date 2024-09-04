import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCursoTable1725476167598 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'curso',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'tipo',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestramp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('curso');
  }
}
