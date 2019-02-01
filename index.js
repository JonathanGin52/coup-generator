const minimist = require('minimist');
const generate = require('./commands/generate');
const load = require('./commands/load');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  let cmd = args._[0] || 'generate';

  switch (cmd) {
    case 'generate':
      generate();
      break;
    case 'load':
      load(args);
      break;
    default:
      console.error(`"${cmd}" is not a valid command!`);
      break;
  }
};
