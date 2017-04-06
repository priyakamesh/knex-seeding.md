const { bookshelf }= require('../bookshelf')

const Battle = bookshelf.Model.extend({
  tableName: 'battles',
  idAttribute: 'id',
  monster: ()=>this.belongsTo('Monster', 'monster_id'),
  hero: ()=> this.belongsTo('Hero','hero_id')
},{
  byLocation: function(location) {
    return this.forge().query({where:{ location: location }}).fetch();
  }
}
)

module.exports = bookshelf.model('Battle', Battle)
