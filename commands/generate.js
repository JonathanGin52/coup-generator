const { communications, force, finance, specialInterest } = require('../data/cards.json');
const load = require('./load');
const game = require('../util/game.js');

const random = (n) => Math.floor(Math.random() * n);

const generateGameSeed = () => {
  let seed = '';
  for (const character in game) {

    let last = '';

    for (let i = 0; i < game[character]['count']; i++) {

      while (true){
        seed += random(game[character]['cards'].length);
        if (seed != last){
          break;
        seed = last;

      }
    }
  }
  }
  return seed;
};
module.exports = (args) => load(generateGameSeed());

