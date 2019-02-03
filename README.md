# Coup Rebellion Game Generator
This command line interface allows you to generate coup games with special characters available in the Coup Rebellion G54 Game.

### Installation
To install this module from npm type the following command.
```bash
$ npm install -g coup
```
### Usage
#### Generate
To generate a game simply type the following command.
```bash
$ coup generate
```
This will display 5 cards: 1 communications, 1 force, 1 finance, and 2 special interest cards which are what are needed to play a coup rebellion game.
This command will also print out a game seed which you can send to other players so that they can view the same cards and rules as your game generation.

#### Load
After you or a player generates a game, a game seed will be provided. To view the same cards as the original generation, type the following command.
```bash
$ coup load c2f0$4s0s5
```
Where `c2f0$4s0s5` is the game seed.

### Contribution
This project is open source, all improvements to the CLI are welcome 🙌.
