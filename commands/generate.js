const { communications, force, finance, specialInterest } = require('../data/cards.json');
const load = require('./load');
const game = require('../util/game.js');

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

