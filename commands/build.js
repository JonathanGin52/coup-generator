const inquirer = require('inquirer');
const game = require('../util/game');

const buildPrompt = () => {
  const prompt = [];
  Object.values(game).forEach((type, index) => {
    for (let repetitions = 0; repetitions < type.count; repetitions++) {
      prompt.push({
        type: 'list',
        choices: type.cards,
        message: `Select ${repetitions > 0 ? 'another' : 'a'} ${type} influence.`,
        name: `${index + repetitions} - ${type}${repetitions > 0 ? ` ${repetitions}` : ''}`,
        //name: `${card}${repetitions > 0 ? ` ${repetitions}` : ''}`,
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

