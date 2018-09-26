const inquirer = require('inquirer');
const chalk = require('chalk');
const Flame = require('./flame');

const { clear, log, error } = console;

const output = result => {
  const relationship = chalk.bold.blue(result.relationship.toUpperCase());
  log(`${result.firstName} and ${result.secondName}'s relationship is: ${relationship}!`);
  process.exit(0);
};

clear();

const acronym = chalk.bold(
  chalk.blue('F'),
  chalk.green('L'),
  chalk.cyan('A'),
  chalk.magenta('M'),
  chalk.red('E')
);

log(`${acronym} - Friends, Lovers, Affectionate, Marriage, Enemies\n`);

inquirer.prompt([
  {
    name: 'firstName',
    type: 'string',
    message: 'Name 1:'
  },
  {
    name: 'secondName',
    type: 'string',
    message: 'Name 2:'
  }
])
  .then(answers => new Flame(answers))
  .then(flame => flame.init())
  .then(result => output(result))
  .catch(err => error(err));
