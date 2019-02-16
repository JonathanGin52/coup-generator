// NPM modules
const game = require('./game');
const { bold } = require('cli-color');
const { log }= console;
const horizontalLine = () => '—'.repeat(process.stdout.columns);

module.exports = (deck, verbose) => {
  let cardIndex = 0;
  
  for (let card in game) {
    for (let repetitions = 0; repetitions < game[card].count; repetitions++) {
      let i = cardIndex + repetitions;
      log(horizontalLine());
      log(game[card].colour(`${card}: ${deck[i].name} (${game[card].alias[repetitions]})`));
      if (verbose){
        log(bold('Action: ') + deck[i].action);
        deck[i].counteraction && log(bold('Counteraction: ') + deck[i].counteraction);
      }
      else{
        log(bold('Action: ') + deck[i].simpleAction);
        deck[i].counteraction ? log(bold('Can counteract?: ') + "✔") : log(bold('Can counteract?: ') + "✘");
      }
    }
    cardIndex++;
  }
  log(horizontalLine());
};



module.exports.printCards = (cards, verbose) => {
  for (let card of cards) {
    log(horizontalLine());
    log(game[card.type].colour(`${card.type}: ${card.card.name} (${game[card.type].alias.join(', ')})`));
    if (verbose){
      log(bold('Action: ') + card.card.action);
      card.card.counteraction && log(bold('Counteraction: ') + card.card.counteraction);
    }
    else{
      log(bold('Action: ') + card.card.simpleAction);
      card.card.counteraction ? log(bold('Can counteract?: ') + "✔") : log(bold('Can counteract?: ') + "✘");
    }
  }
  log(horizontalLine());
};

