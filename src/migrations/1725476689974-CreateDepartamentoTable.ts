import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDepartamentoTable1725476689974
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'departamento',
        columns: [
          { name: 'id', type: 'integer', isPrimary: true },
          {
            name: 'sigla',
            type: 'varchar',
          },
          {
            name: 'nome',
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
    await queryRunner.dropTable('departamento');
  }
}
