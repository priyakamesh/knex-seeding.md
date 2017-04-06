const { bookshelf } = require('../bookshelf')

const Hero = bookshelf.Model.extend({
  tableName: 'heroes',
  idAttribute: 'id',
  hero: ()=> this.hasMany('Battle', 'hero_id')
  },{
   byName: function(name) {
     return this.forge().query({where:{ name: name }}).fetch();
    }})

module.exports = bookshelf.model('Hero',Hero)
