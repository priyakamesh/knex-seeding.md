const { bookshelf } =require('../bookshelf')

const Monster = bookshelf.Model.extend({
  tableName: 'monsters',
  idAttribute: 'id',
  battle: ()=> this.hasMany('Battle','monster_id')
})
module.exports = bookshelf.model('Monster', Monster)
