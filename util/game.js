const { communications, force, finance, specialInterest } = require('../data/cards.json');
const { yellow, green, magenta, cyan } = require('cli-color');

const game = {
  'Communications': {
    count: 1,
    alias: ['Ambassador'],
    colour: green,
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
    colour: magenta,
    cards: finance,
  },
  'Special Interest': {
    count: 2,
    alias: ['Contessa', 'Captain'],
    colour: cyan,
    cards: specialInterest,
  },
};

module.exports = game;
