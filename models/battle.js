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
  ,{
    byHero: function (hero_id){
      return this.forge().query({where:{ hero_id : hero_id }}).fetch();
    }
  }
)

module.exports = bookshelf.model('Battle', Battle)
