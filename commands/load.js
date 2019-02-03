const { communications, force, finance, specialInterest } = require('../data/cards.json');
const log = console.log;

module.exports = (seed) => {
  console.log('Loading game');
  log(seed);
  const deck = [];

  const ids = seed.split('');
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
  log(deck);
};

