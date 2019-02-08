const inquirer = require('inquirer');
const game = require('../util/game');

const buildPrompt = () => {
  const prompt = [];
  for (let card in game) {
    for (let repetitions = 0; repetitions < game[card].count; repetitions++) {
      prompt.push({
        type: 'list',
        choices: game[card].cards,
        message: `Select ${repetitions > 0 ? 'another' : 'a'} ${card} influence`,
        name: `${card}${repetitions > 0 ? ` ${repetitions}` : ''}`,
      });
    }
  }
  return prompt;
};

module.exports = () => {
  inquirer.prompt(buildPrompt()).then((answers) => {
    for (const [type, selection] of Object.entries(answers)) {
      // TODO: build seed
      console.log(`${type} ${selection}`);
    }
  });
};

