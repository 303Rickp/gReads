
exports.up = function(knex, Promise) {
  return knex.schema.createTable('author', function(table){
    table.increments().primary();
    table.integer('book_id');
    table.string('first_name');
    table.string('last_name');
    table.text('bio');
    table.text('portrait');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('author');
};
