const minimist = require('minimist');
const generate = require('./commands/generate');
const load = require('./commands/load');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  let cmd = args._[0] || 'generate';
  console.log(args);

  switch (cmd) {
    case 'generate':
    case 'g':
      generate();
      break;
    case 'load':
    case 'l':
      load(args);
      break;
    default:
      console.error(`"${cmd}" is not a valid command!`);
      break;
  }
};
