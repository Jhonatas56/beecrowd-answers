var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
 
const values = lines.shift().split(" ");
 
const a = parseFloat(values.shift());
const b = parseFloat(values.shift());
const c = parseFloat(values.shift());

const triangulo = (a*c)/2;
const circulo = 3.14159 * Math.pow(c, 2);
const trapezio = ((a+b)*c)/2;
const quadrado = Math.pow(b, 2);
const retangulo = a * b;

console.log("TRIANGULO: " + triangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));