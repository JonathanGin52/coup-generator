const { communications, force, finance, specialInterest } = require('../data/cards.json');
const { underline } = require('cli-color');
const formatOutput = require('../util/format');
const error = require('../util/error');

module.exports = (seed) => {
  console.log(`Your game seed is ${underline(seed)}`);
  const deck = [];

  seed.split('').forEach((id, index) => {
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
        error('Your seed is too long.', true);
        break;
    }
  });
  formatOutput(deck);
};

