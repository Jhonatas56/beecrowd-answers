var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
 
const firstProduct = lines.shift().split(" ");
const secondProduct = lines.shift().split(" ");

const firstCode = parseInt(firstProduct.shift());
const firstNumber = parseInt(firstProduct.shift());
const firstValue = parseFloat(firstProduct.shift());

const secondCode = parseInt(secondProduct.shift());
const secondNumber = parseInt(secondProduct.shift());
const secondValue = parseFloat(secondProduct.shift());

const total = (firstNumber * firstValue) + (secondNumber * secondValue);

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));