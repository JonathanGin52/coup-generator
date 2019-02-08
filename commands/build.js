const inquirer = require('inquirer');
const game = require('../util/game');

const prependIndexOnCards = (cards) => {
  return cards.map( (card, index) => ({...card, name: `${index + 1}) ${card.name}`}) );
};

const buildPrompt = () => {
  const prompt = [];
  Object.entries(game).forEach(([type, data]) => {
    for (let repetitions = 0; repetitions < data.count; repetitions++) {
      prompt.push({
        type: 'list',
        choices: prependIndexOnCards(data.cards),
        message: `Select ${repetitions > 0 ? 'another' : 'a'} ${type} influence.`,
        name: `${type}${repetitions > 0 ? ` ${repetitions}` : ''}`,
      });
    }
  });
  return prompt;
};

module.exports = () => {
  inquirer.prompt(buildPrompt()).then((answers) => {
    console.log(answers);
    for (const [type, selection] of Object.entries(answers)) {
      // TODO: build seed
      console.log(`${type} ${selection}`);
    }
  });
};

