const minimist = require('minimist');
const generate = require('./commands/generate');
const load = require('./commands/load');
const build = require('./commands/build');
const help = require('./commands/help');
const explain = require('./commands/explain');
const error = require('./util/error');


module.exports = () => {
  const args = minimist(process.argv.slice(2), {
    string: [ 'seed', 's' ],
  });

  let cmd = args._[0] || 'generate';
  const verbose = args.v || args.verbose;
  const seed = args.s || args.seed;

  switch (cmd) {
    case 'generate':
    case 'g':
      generate(verbose);
      break;
    case 'load':
    case 'l': {
      load(seed, verbose);
      break;
    }
    case 'build':
    case 'b':
      build();
      break;
    case 'help':
    case 'h':
      help();
      break;
    case 'explain':
    case 'e':
      explain(args._[1], verbose);
      break;
    default:
      error(`"${cmd}" is not a valid command!`, true);
      break;
  }
};

