//  Expressões e operadores

// -Expressions
// -Operators
// Binary
// Unary
// Ternary

// Expression são qualquer coisa em linha que resolvem alguma coisa

// Toda expression no js pode ou não terminar com ;
let number = 20

// Um dos poucos casos que você poderá o ;
// Exemplo
let otherNumber = 2;

// Em uma expressão auto executável sem o ;
(function () {
    console.log('Oie')
})()

// Como o JS entende isso por debaixo dos panos
// let otherNumber = 2 (function () {
//     console.log('Oie')
// })()

// Aí esta dizendo que ele vai executar o 2 passar uma função como argumento e então receber uma outra função