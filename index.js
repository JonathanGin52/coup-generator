const minimist = require('minimist');
const generate = require('./commands/generate');
const load = require('./commands/load');
const error = require('./util/error');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  let cmd = args._[0] || 'generate';

  switch (cmd) {
    case 'generate':
    case 'g':
      generate();
      break;
    case 'load':
    case 'l':
      const seed = args.s || args.seed;
      load(seed);
      break;
    default:
      error(`"${cmd}" is not a valid command!`, true);
      break;
  }
};

