var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
 
function calcMaior(num1, num2) {
    const maior = (num1 + num2 + Math.abs(num1 - num2))/2;
    return maior;
}

const values = lines.shift().split(" ");

const a = parseInt(values.shift());
const b = parseInt(values.shift());
const c = parseInt(values.shift());

let maior = calcMaior(a, b);
maior = calcMaior(maior, c);

console.log(maior + " eh o maior");