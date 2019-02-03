const { communications, force, finance, specialInterest } = require('../data/cards.json');
const { red, yellow, magenta, cyan, white } = require('cli-color');

const game = {
  'Communications': {
    'count': 1,
    'colour': cyan,
    'cards': communications,
  },
  'Force': {
    'count': 1,
    'colour': yellow,
    'cards': force,
  },
  'Finance': {
    'count': 1,
    'colour': red,
    'cards': finance,
  },
  'Special Interest': {
    'count': 2,
    'colour': magenta,
    'cards': specialInterest,
  },
};

module.exports = game;
