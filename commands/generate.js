// NPM modules
const { red, yellow, magenta, cyan, white } = require('cli-color');

// Cards data
const cards = require('../data/cards.json');
const { communications, force, finance, specialInterest } = cards;

// Functions
const { log } = console;

const game = {
  "Communications": {
    "count": 1,
    "colour": cyan,
    "cards": communications,
  },
  "Force": {
    "count": 1,
    "colour": yellow,
    "cards": force,
  },
  "Finance": {
    "count": 1,
    "colour": red,
    "cards": finance,
  },
  "Special Interest": {
    "count": 2,
    "colour": magenta,
    "cards": specialInterest,
  },
};
  

const random = (n) => Math.floor(Math.random() * n); 

const generateGameSeed = () => {
  var s = "";
  for (const character in game) {
    for (let i = 0; i < game[character]["count"]; i++) {
      s += random(game[character]["cards"].length);
    }
  }
  return s;
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
  const gameSeed = generateGameSeed();
  log(gameSeed);
  let deck = [];

  deck.push(communications.sample());
  deck.push(force.sample());
  deck.push(finance.sample());
  deck.push(specialInterest.sample(2));

  deck = [].concat.apply([], deck);

  // Print out the deck
  let drawn = ["Communications", "Force", "Finance", "Special Interest", "Special Interest"];
  let colours = [cyan, yellow, red, magenta, magenta];

  for (let i = 0; i < drawn.length; i++) {
    console.log(colours[i](drawn[i]));
    console.log("Action: " + deck[i].action);
    deck[i].counteraction && console.log("Counteraction: " + deck[i].counteraction);
  }
};

