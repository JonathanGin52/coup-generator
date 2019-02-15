const enquirer = require('enquirer');
const { underline } = require('cli-color');
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
          return this.focused.id.toString();
        },
      });
    }
  });
  return prompt;
};

module.exports = () => {
  enquirer.prompt(buildPrompt()).then((answers) => {
    const seed = Object.values(answers).join('');
    console.log(`Your game seed is ${underline(seed)}`);
  });
};

