// NPM modules
const game = require('./game');
const { bold, green, red } = require('cli-color');
const { log }= console;
const horizontalLine = () => log('—'.repeat(process.stdout.columns));
const CHECKMARK = green('✔');
const XMARK = red('✖');

module.exports = (deck, verbose) => {
  let cardIndex = 0;
  
  for (let card in game) {
    for (let repetitions = 0; repetitions < game[card].count; repetitions++) {
      let i = cardIndex + repetitions;
      let action = deck[i][verbose ? 'action' : 'simpleAction'];
      let counteraction = deck[i].counteraction ? (verbose ? deck[i].counteraction : CHECKMARK) : (verbose ? null : XMARK);

      horizontalLine();

      log(game[card].colour(`${card}: ${deck[i].name} (${game[card].alias[repetitions]})`));
      log(`${bold('Action:')} ${action}`);
      counteraction && log(`${bold('Counter:')} ${counteraction}`);
    }
    cardIndex++;
  }
  horizontalLine();
};

module.exports.printCards = (cards, verbose) => {
  for (let card of cards) {
    let action = card.card[verbose ? 'action' : 'simpleAction'];
    let counteraction = card.card.counteraction ? (verbose ? card.card.counteraction : CHECKMARK) : (verbose ? null : XMARK);

    horizontalLine();

    log(game[card.type].colour(`${card.type}: ${card.card.name} (${game[card.type].alias.join(', ')})`));
    log(bold('Action: ') + action);
    counteraction && log(`${'Counter:'} ${counteraction}`);
  }
  horizontalLine();
};

