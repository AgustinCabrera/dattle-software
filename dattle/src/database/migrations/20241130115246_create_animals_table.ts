import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('animals', (table) => {
    table.uuid('id').primary();
    table.string('identification').notNullable();
    table.date('birthDate').notNullable();
    table.string('breed').notNullable();
    table.string('gender').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('animals');
}
