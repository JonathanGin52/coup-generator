const { communications, force, finance, specialInterest } = require('../data/cards.json');
const { underline } = require('cli-color');
const formatOutput = require('../util/format');
const error = require('../util/error');
const { SEED_LENGTH, RANGE_MINIMUM, RANGE_MAXIMUM, RANGE_ERROR, PARSE_ERROR, LENGTH_ERROR } = require('../util/validation');

module.exports = (seed) => {
  console.log(`Your game seed is ${underline(seed)}`);
  const deck = [];
  const seedArray = seed.split('');

  // Validate game seed
  seed.length !== SEED_LENGTH && error(LENGTH_ERROR, true);
  !/^\d+$/.test(seed) && error(PARSE_ERROR, true);

  seedArray.forEach((id, index) => {
    switch (index) {
      case 0:
        id > RANGE_MAXIMUM && error(RANGE_ERROR, true);
        deck.push(communications[id]);
        break;
      case 1:
        id > RANGE_MAXIMUM && error(RANGE_ERROR, true);
        deck.push(force[id]);
        break;
      case 2:
        id > RANGE_MAXIMUM && error(RANGE_ERROR, true);
        deck.push(finance[id]);
        break;
      case 3:
        deck.push(specialInterest[id]);
        break;
      case 4:
        deck.push(specialInterest[id]);
        break;
    }
  });
  formatOutput(deck);
};

