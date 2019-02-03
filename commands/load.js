const { communications, force, finance, specialInterest } = require('../data/cards.json');
const formatOutput = require('../util/format');
const log = console.log;

module.exports = (args) => {
  console.log('Loading game');
  const seed = args.seed || args.s;
  log(seed);
  const deck = [];

  const ids = seed.toString().split('');
  ids.forEach((id, index) => {
    switch (index) {
      case 0:
        deck.push(communications[id]);
        break;
      case 1:
        deck.push(force[id]);
        break;
      case 2:
        deck.push(finance[id]);
        break;
      case 3:
        deck.push(specialInterest[id]);
        break;
      case 4:
        deck.push(specialInterest[id]);
        break;
      default:
        log('Your seed is too long');
        break;
    }
  });
  formatOutput(deck);
};

