const game = require('../data/cards');
const { printCards } = require('../util/format');
const cards = Object.values(game).flat(2);
const log = console.log;

module.exports = (character) => {
  if (!character) {
    return log('No card found.');
  }

  character = new RegExp(character, 'i');
  printCards(cards.filter(card => card.name.match(character)));
};
