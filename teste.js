let numero;
do {

 numero = prompt('digite um número entre 1 a 10:');
 } while(numero < 1 || numero > 10);

console.log(`você digitou o número' ${numero}.`);