var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
 
const seller = lines.shift();
const salary = parseFloat(lines.shift());
const sold = parseFloat(lines.shift());

const total = salary + (sold * 0.15);

console.log("TOTAL = R$ " + total.toFixed(2));