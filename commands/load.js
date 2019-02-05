const { communications, force, finance, specialInterest } = require('../data/cards.json');
const { underline } = require('cli-color');
const formatOutput = require('../util/format');
const error = require('../util/error');

module.exports = (seed) => {
  console.log(`Your game seed is ${underline(seed)}`);
  const deck = [];
  const seedArray = seed.split('');

  // Validate game seed
  if (seed.length !== 5) {
    error(`Seed length is too ${seed.length > 5 ? 'long' : 'short'}, seed length must be 5.`, true);
  }

  seedArray.forEach((id, index) => {
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
    }
  });
  formatOutput(deck);
};

