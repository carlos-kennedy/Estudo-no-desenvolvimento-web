//  Expressões e operadores

// -Expressions
// -Operators
// Binary
// Unary
// Ternary

// Expression são qualquer coisa em linha que resolvem alguma coisa

// Toda expression no js pode ou não terminar com ; pois é bem facultativo no js
let number = 1

// Um dos poucos casos que você poderá usar o ;
// Exemplo
// let otherNumber = 2;

// Em uma expressão auto executável com o ;
// (function () {
//     console.log('Oie')
// })()

// Como o JS entende isso por debaixo dos panos
// let otherNumber = 2 (function () {
//     console.log('Oie')
// })()

// Aí esta dizendo que ele vai executar o 2 passar uma função como argumento e então receber uma outra função

console.log(number + 1) //Binary por ter dois valores para que o operador esteja entre eles.

console.log(++number) //Unary por ter apenas um valor e receber algum tipo de operador como incremento tipo o "typeof" que é um operador unary

console.log(false ? 'Lindo' : 'Lindo demais') //Ternary possui valores com boolean com opções de condiçãos true or false. No exemplo acima você utiliza duas opções de se e senão nos : , se o for true dará a primeira opção se for false entrará na segunda opção