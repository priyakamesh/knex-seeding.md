const { bookshelf } = require('../bookshelf')

const Hero = bookshelf.Model.extend({
  tableName: 'heroes'
})

module.exports = bookshelf.model('Hero',Hero)
