
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('heroes').del()
    .then(function () {
      // Inserts seed entries
      return knex('heroes').insert([
        {name: 'priya',weapons:'leg',health: 20},
        {name: 'kamesh',weapons:'hand',health: 50},
        {name: 'nithin',weapons:'cry',health: 100}
      ]);
    });
};
