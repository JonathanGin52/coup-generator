const { communications, force, finance, specialInterest } = require('../data/cards.json');
const load = require('./load');
const game = require('../util/game.js');

const random = (n) => Math.floor(Math.random() * n);

const generateGameSeed = () => {
  let seed = '';

  for (const character in game) {
    let last = '';
    for (let i = 0; i < game[character]['count']; i++) {
      let newSeed = random(game[character]['cards'].length);

      while (newSeed === last) {
        newSeed = random(game[character]['cards'].length);
      }
      last = newSeed;
      seed += newSeed;

    }
  }
  return seed;
};

module.exports = (args) => load(generateGameSeed());

