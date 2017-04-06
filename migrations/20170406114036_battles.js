exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('battles',(table)=>{
      table.increments()
      table.string('location')
      table.integer('hero_id').references('heroes.id')
      table.integer('monster_id').references('monsters.id')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('battles')
};
