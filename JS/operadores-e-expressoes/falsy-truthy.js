// Type conversion (typecasting) vs type Coersion
// Type conversion (typecasting) é quando o próprio JS faz uma conversão

// Exemplo:
// console.log(Number('9') + 50)



// FALSY
// Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

// false
// 0
// -0
// ""
// null
// undefined
// NaN

console.log(false ? 'Estou verdadeiro' : 'Estou falso')
console.log(0 ? 'Estou verdadeiro' : 'Estou falso')
console.log(- 0 ? 'Estou verdadeiro' : 'Estou falso')
console.log("" ? 'Estou verdadeiro' : 'Estou falso')
console.log(null ? 'Estou verdadeiro' : 'Estou falso')
console.log(undefined ? 'Estou verdadeiro' : 'Estou falso')
console.log(NaN ? 'Estou verdadeiro' : 'Estou falso')

// Truthy
// Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionai e loops)

// true
// {}
// []
// 1
// 3.23
// "0"
// "false"
// -1
// Infinity
// -Infinity

console.log(true ? 'Estou verdadeiro' : 'Estou Falso')
console.log({} ? 'Estou verdadeiro' : 'Estou Falso')
console.log([] ? 'Estou verdadeiro' : 'Estou Falso')
console.log(1 ? 'Estou verdadeiro' : 'Estou Falso')
console.log(3.23 ? 'Estou verdadeiro' : 'Estou Falso')
console.log("0" ? 'Estou verdadeiro' : 'Estou Falso')
console.log("false" ? 'Estou verdadeiro' : 'Estou Falso')
console.log(Infinity ? 'Estou verdadeiro' : 'Estou Falso')
console.log(-Infinity ? 'Estou verdadeiro' : 'Estou Falso')