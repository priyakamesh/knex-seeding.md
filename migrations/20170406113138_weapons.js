
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('weapons',(t)=>{
      t.increments()
      t.string('name').notNullable()
      t.integer('hero_id').references("heroes.id")
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('weapons')
};
