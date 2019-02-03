// Cards data
const { communications, force, finance, specialInterest } = require('../data/cards.json');

// Functions
const log = console.log;
const formatOutput = require('../util/format');

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
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

Array.prototype.sample = function(count = 1) {
  return shuffle(this).slice(0, count);
}

module.exports = (args) => {
  // TODO: Not being used yet, leverage when load by seed is complete
  const gameSeed = generateGameSeed();
  log(gameSeed);

  let deck = [];

  deck.push(communications.sample());
  deck.push(force.sample());
  deck.push(finance.sample());
  deck.push(specialInterest.sample(2));

  deck = [].concat.apply([], deck);

  // Print out the deck
  formatOutput(deck);
};

