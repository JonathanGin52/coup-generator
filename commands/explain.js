const game = require('../util/game');
const { printCards } = require('../util/format');

module.exports = (character) => {
  if (!character) {
    return console.log('No card found.');
  }

  let matches = [];

  for (type in game) {
    for (card of game[type].cards) {
      if (card.name.match(RegExp(character, 'i'))) {
        matches.push({ card, type });
      }
    }
  }
  console.log(matches);

};
