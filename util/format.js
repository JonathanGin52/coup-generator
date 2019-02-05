// NPM modules
const game = require('./game');
const { bold } = require('cli-color');
const { log }= console;
const horizontalLine = () => '—'.repeat(process.stdout.columns);

module.exports = (deck) => {
  let cardIndex = 0;
  for (let card in game) {
    for (let repetitions = 0; repetitions < game[card].count; repetitions++) {
      let i = cardIndex + repetitions;
      log(horizontalLine());
      log(game[card].colour(`${card}: ${deck[i].name} (${game[card].alias[repetitions]})`));
      log(bold('Action: ') + deck[i].action);
      deck[i].counteraction && log(bold('Counteraction: ') + deck[i].counteraction);
    }
    cardIndex++;
  }
  log(horizontalLine());
};

module.exports.printCards = (cards) => {
  for (let card of cards) {
    log(horizontalLine());
    log(`${bold('Influence:')} ${card.name}`);
    log(`${bold('Action:')} ${card.action}`);
    card.counteraction && log(`${bold('Counteraction:')} ${card.counteraction}`);
  }
  log(horizontalLine());
};
