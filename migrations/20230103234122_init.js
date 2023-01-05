/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('pathData', function(table) {
    table.increments('id')
    table.string('firstname')
    table.string('lastname')
    table.string('hometown')
    table.string('information', 5000)
    table.timestamps()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('pathData')
};
