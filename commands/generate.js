const { red, yellow, magenta, cyan, white } = require('cli-color');
const cards = require('../data/cards.json');
const { communications, force, finance, specialInterest } = cards;
const log = console.log;

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

Array.prototype.sample = function(count = 1) {
  return shuffle(this).slice(0, count);
};

module.exports = (args) => {
  log('generating game');
  const deck = [];
  //log(cards);
  deck.push(communications.sample());
  deck.push(force.sample());
  deck.push(finance.sample());
  deck.push(specialInterest.sample(2));

  log(deck);
};

