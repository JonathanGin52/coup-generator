const minimist = require('minimist');
const generate = require('./commands/generate');
const load = require('./commands/load');

module.exports = () => {
  const args = minimist(process.argv.slice(2), {
    string: 'load',           // --load seed
    boolean: [ 'generate' ],
  });
  console.log(args);

  if (args.load || args.l) {
    load(args.load);
  } else if (args.generate) {
    generate();
  } else {
    console.log('nothing');
  }
};
