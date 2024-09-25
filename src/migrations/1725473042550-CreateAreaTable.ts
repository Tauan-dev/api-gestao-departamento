import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAreaTable1725473042550 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'area',
        columns: [
          { name: 'id', type: 'integer', isPrimary: true },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'img',
            type: 'varchar',
          },
          {
            name: ' created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('area');
  }
}
