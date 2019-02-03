const { communications, force, finance, specialInterest } = require('../data/cards.json');
const load = require('./load');

const game = {
  'Communications': {
    'count': 1,
    'colour': 'cyan',
    'cards': communications,
  },
  'Force': {
    'count': 1,
    'colour': 'yellow',
    'cards': force,
  },
  'Finance': {
    'count': 1,
    'colour': 'red',
    'cards': finance,
  },
  'Special Interest': {
    'count': 2,
    'colour': 'magenta',
    'cards': specialInterest,
  },
};

const random = (n) => Math.floor(Math.random() * n);

const generateGameSeed = () => {
  let seed = '';
  for (const character in game) {
    for (let i = 0; i < game[character]['count']; i++) {
      seed += random(game[character]['cards'].length);
    }
  }
  return seed;
};

module.exports = (args) => load(generateGameSeed());

