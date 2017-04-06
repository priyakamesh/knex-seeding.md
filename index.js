const { bookshelf } = require('./bookshelf')
const Monster = require('./models/monster')
const Hero = require('./models/hero.js')
const Battle = require('./models/battle')
let monster = new Monster()
// monster.set('name', 'sully')
// monster.set('weapons', 'knife')

// monster.save().then((m)=>{
//   console.log('Monster saved: ', m.get('name'))
// })
var Monsters = bookshelf.Collection.extend({
model: Monster
})
Monsters.forge().fetch().then(function(monsters){
  monsters = monsters.toJSON()
  monsters.map(monsters => {console.log(monsters.name)})
})
let hero = new Hero()
// hero.set('name', ' Joe')
// hero.set('weapons', 'pencil')
// hero.set('health', 80)

// hero.save().then((h)=>{
//   console.log("NEW HERO", h.get('name'))
// })
  Hero.byName('nithin').then((hero)=>{
    console.log('Hero Id', hero.get('id'))
  })
Battle.byLocation('nashville').then((battle)=>{
  console.log('Got Battle ',battle.get('monster_id'),battle.get('hero_id'));
});
// let battle = new Battle()
// battle.set('location', 'India')
// battle.set('hero_id', 6)
// battle.set('monster_id', 7)
// battle.save().then((b)=>{
//   console.log('Battle added: ', b.get('location'))
// })


// Battle.byHero(1).then((b)=>{
//   console.log('Battles: ', b.get('location'));
// });
Battle.forge().query({where: {hero_id:6}}).fetchAll().then(function(battles) {
    console.log('Got a bunch of battles!');
    battles.map(battles=> {console.log(battles.get('location'))})
});
