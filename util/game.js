const { communications, force, finance, specialInterest } = require('../data/cards.json');
const { red, yellow, magenta, cyan, white } = require('cli-color');

const game = {
  'Communications': {
    count: 1,
    real: ['Captain'],
    colour: cyan,
    cards: communications,
  },
  'Force': {
    count: 1,
    real: ['Assassin'],
    colour: yellow,
    cards: force,
  },
  'Finance': {
    count: 1,
    real: ['Duke'],
    colour: red,
    cards: finance,
  },
  'Special Interest': {
    count: 2,
    real: ['Contessa', 'Ambassador'],
    colour: magenta,
    cards: specialInterest,
  },
};

module.exports = game;
