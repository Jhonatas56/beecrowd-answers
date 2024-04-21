var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
 
const number = parseInt(lines.shift());
const hours = parseInt(lines.shift());
const valuePerHour = parseFloat(lines.shift());

const salary = hours * valuePerHour;

console.log("NUMBER = " + number);
console.log("SALARY = U$ " + salary.toFixed(2));