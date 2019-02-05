const { communications, force, finance, specialInterest } = require('../data/cards.json');
const { red, yellow, magenta, cyan } = require('cli-color');

const game = {
  'Communications': {
    count: 1,
    alias: ['Captain'],
    colour: cyan,
    cards: communications,
  },
  'Force': {
    count: 1,
    alias: ['Assassin'],
    colour: yellow,
    cards: force,
  },
  'Finance': {
    count: 1,
    alias: ['Duke'],
    colour: red,
    cards: finance,
  },
  'Special Interest': {
    count: 2,
    alias: ['Contessa', 'Ambassador'],
    colour: magenta,
    cards: specialInterest,
  },
};

module.exports = game;
