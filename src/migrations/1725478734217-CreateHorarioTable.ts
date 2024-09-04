import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateHorarioTable1725478734217 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'horario',
        columns: [
          { name: 'id', type: 'integer', isPrimary: true, isGenerated: true },
          {
            name: 'horario',
            type: 'varchar',
          },
          {
            name: 'dia',
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
    await queryRunner.dropTable('horario');
  }
}
