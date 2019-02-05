const log = console.log;

module.exports = () => {
  log('Coup generator possible commands:');
  log('    help                    - Shows possible commands');
  log('    generate                - generates a random coup game and outputs a seed');
  log('    load --seed <game-seed> - loads a coup game from the given seed');
  log('    explain <character>     - Displays the rules of the searched character(s)');
}
