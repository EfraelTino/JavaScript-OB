import * as moddulos from './controlles.js'
import chalk from 'chalk';

const multi= moddulos.multiplicar(1,2)
console.log(multi)

const sum = moddulos.suma(4,5)
console.log(sum)

console.log(`
CPU: ${chalk.red('90%')}
DISK: ${chalk.yellow('70%')}
RAM: ${chalk.green('40%')}
`);