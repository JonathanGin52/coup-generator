const log = console.log;

module.exports = () => {
  log('Coup generator possible commands:');
  log('    help                    - Shows possible commands');
  log('    generate                - Generates a random coup game and outputs a seed');
  log('    load <game-seed>        - Loads a coup game from the given seed');
  log('    explain <role>          - Displays the rules of the searched role(s)');
  log('Optional flags:');
  log('    [--verbose], [-v]       - Displays full description of the role(s)');
};
