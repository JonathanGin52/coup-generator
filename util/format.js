// NPM modules
const { bold } = require('cli-color');
const game = require('./game');

const cards = ['Communications', 'Force', 'Finance', 'Special Interest', 'Special Interest'];
const horizontalLine = () => '—'.repeat(process.stdout.columns);

module.exports = (deck) => {
  for (let i = 0; i < cards.length; i++) {
    console.log(horizontalLine());  
    console.log(game[cards[i]].colour(`${cards[i]}: ${deck[i].name}`));
    console.log(bold('Action: ') + deck[i].action);
    deck[i].counteraction && console.log(bold('Counteraction: ') + deck[i].counteraction);
  }
};

