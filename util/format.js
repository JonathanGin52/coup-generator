// NPM modules
const { bold } = require('cli-color');
const game = require('./game');
const horizontalLine = () => '—'.repeat(process.stdout.columns);

module.exports = (deck) => {
  let cardIndex = 0;
  for (let card in game) {
    for (let repetitions = 0; repetitions < game[card].count; repetitions++) {
      let i = cardIndex + repetitions;
      console.log(horizontalLine());
      console.log(game[card].colour(`${card}: ${deck[i].name} (${game[card].alias[repetitions]})`));
      console.log(bold('Action: ') + deck[i].action);
      deck[i].counteraction && console.log(bold('Counteraction: ') + deck[i].counteraction);
    }
    cardIndex++;
  }
};
