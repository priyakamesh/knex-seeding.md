const { bookshelf } =require('../bookshelf')

const Monster = bookshelf.Model.extend({
  tableName: 'monsters'
})
module.exports = bookshelf.model('Monster', Monster)
