// NPM modules
const { red, yellow, magenta, cyan, white } = require('cli-color');

// Cards data
const cards = require('../data/cards.json');
const { communications, force, finance, specialInterest } = cards;

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

Array.prototype.sample = function(count = 1) {
  return shuffle(this).slice(0, count);
}

module.exports = (args) => {
  const deck = {};

  deck.communications = communications.sample();
  deck.force = force.sample();
  deck.finance = finance.sample();
  deck.specialInterest = specialInterest.sample(2);

  console.log(deck);
};

