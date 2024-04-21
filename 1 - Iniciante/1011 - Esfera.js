var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const pi = 3.14159;
const r = parseFloat(lines.shift());

const volume = (4/3)*pi*Math.pow(r, 3);

console.log("VOLUME = " + volume.toFixed(3));