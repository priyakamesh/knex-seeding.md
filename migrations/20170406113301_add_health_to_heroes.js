
exports.up = function(knex, Promise) {
  return knex.schema.table('heroes',(t)=>{
    t.integer('health').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('heroes',(t)=>{
    t.dropColumn('health');
  })
};
