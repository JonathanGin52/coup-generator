const enquirer = require('enquirer');
const game = require('../util/game');

const buildPrompt = () => {
  const prompt = [];
  Object.entries(game).forEach(([type, data]) => {
    for (let repetitions = 0; repetitions < data.count; repetitions++) {
      prompt.push({
        type: 'select',
        message: `Select ${repetitions > 0 ? 'another' : 'a'} ${type} influence`,
        name: `${type}${repetitions > 0 ? ` ${repetitions}` : ''}`,
        choices: data.cards,
        result() {
          return this.focused.id;
        },
      });
    }
  });
  return prompt;
};

module.exports = () => {
  enquirer.prompt(buildPrompt()).then((answers) => {
    console.log(answers);
    for (const [type, selection] of Object.entries(answers)) {
      // TODO: build seed
      console.log(`${type} ${selection}`);
    }
  });
};

