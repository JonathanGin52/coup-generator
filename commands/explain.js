const game = require('../data/cards');
const { printCards } = require('../util/format');
const cards = Object.values(game).flat(2);

module.exports = (character) => {
  if (!character) {
    return console.log('No card found.');
  }

  character = new RegExp(character, 'i');
  printCards(cards.filter(card => card.name.match(character)));
};
