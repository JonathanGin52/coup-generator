// NPM modules
const { red, yellow, magenta, cyan, white } = require('cli-color');

const drawn = ['Communications', 'Force', 'Finance', 'Special Interest', 'Special Interest'];
const colours = [cyan, yellow, red, magenta, magenta];

module.exports = (deck) => {
  for (let i = 0; i < drawn.length; i++) {
    console.log(colours[i](drawn[i]));
    console.log('Action: ' + deck[i].action);
    deck[i].counteraction && console.log('Counteraction: ' + deck[i].counteraction);
  }
};

