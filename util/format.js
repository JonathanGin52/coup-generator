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
  for (card of cards) {
    log(horizontalLine());
    log(game[card.type].colour(`${card.type}: ${card.card.name} (${game[card.type].alias.join(', ')})`));
    log(bold('Action: ') + card.card.action);
    card.card.counteraction && log(bold('Counteraction: ') + card.card.counteraction);
  }
  log(horizontalLine());
};
