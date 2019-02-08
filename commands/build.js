const inquirer = require('inquirer');
const game = require('../util/game');

module.exports = () => {
  inquirer.prompt(Object.keys(game).map((card) => ({
    type: 'list',
    choices: game[card].cards,
    message: `Select a ${card} influence`,
    name: card,
  }))).then((answers) => {
    for (const [type, selection] of Object.entries(answers)) {
      console.log(`${type} ${selection}`);
    }
  });
};

