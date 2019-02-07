const inquirer = require('inquirer');
const game = require('../util/game');

const getPrompt = () => {
  // TODO: use method to generate prompt
  const prompt = [
    {
      type: 'list',
      choices: game['Communications'].cards,
      message: 'Select a communications influence.',
      name: 'Communications',
    },
    {
      type: 'list',
      choices: game['Force'].cards,
      message: 'Select a force influence.',
      name: 'Force',
    },
    {
      type: 'list',
      choices: game['Finance'].cards,
      message: 'Select a finance influence.',
      name: 'Finance',
    },
    {
      type: 'list',
      choices: game['Special Interest'].cards,
      message: 'Select a special interest influence.',
      name: 'Special Interest',
    },
    {
      type: 'list',
      choices: game['Special Interest'].cards,
      message: 'Select another special interest influence.',
      name: 'Special Interest',
    }
  ];
  return prompt;
};

module.exports = () => {
  inquirer.prompt(getPrompt()).then((answers) => {
    // console.log(answers);
    for (const [type, selection] of Object.entries(answers)) {
      console.log(`${type} ${selection}`);
    }
  });
};

