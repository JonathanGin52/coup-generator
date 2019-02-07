const inquirer = require('inquirer');
const game = require('../util/game');

module.exports = () => {
  console.log(game);
  inquirer
    .prompt([
      { type: 'list',
        choices: game['Communications'].cards,
        message: 'Select a communications influence.',
        name: 'Communications',
      },
      { type: 'list',
        choices: game['Force'].cards,
        message: 'Select a force influence.',
        name: 'Force',
      },
      { type: 'list',
        choices: game['Finance'].cards,
        message: 'Select a finance influence.',
        name: 'Finance',
      },
      { type: 'list',
        choices: game['Special Interest'].cards,
        message: 'Select a special interest influence.',
        name: 'Special Interest',
      },
      { type: 'list',
        choices: game['Special Interest'].cards,
        message: 'Select another special interest influence.',
        name: 'Special Interest',
      }
    ]).then((answers) => {
      console.log(answers);
    });
};

