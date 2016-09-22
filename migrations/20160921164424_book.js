
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', function(table){
    table.increments();
    table.string('title');
    table.string('genre');
    table.text('discription');
    table.string('cover');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('book')
};
