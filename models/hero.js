const { bookshelf } = require('../bookshelf')

const Hero = bookshelf.Model.extend({
  tableName: 'heroes',
  idAttribute: 'id',
  hero: ()=> this.hasMany('Battle', 'hero_id')
})

module.exports = bookshelf.model('Hero',Hero)
