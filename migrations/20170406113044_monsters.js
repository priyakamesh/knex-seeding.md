
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('monsters',(table)=>{
      table.increments()
      table.string('name').unique()
      table.string('weapons')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('monsters')
};
