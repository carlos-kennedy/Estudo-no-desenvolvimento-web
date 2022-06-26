// Operador condicional ternário

// Dependendo da condição nos recebemos valores diferentes

// Condição então valor 1 se não valor 2:

// condition ? value1 : value2

// Exemplos

// Café da manhã top
let pao = true
let manteiga = false
let cafe = true

// const niceBreakfeast = pao && manteiga && cafe ? 'Café da manhã top :)' : 'Falto alguma coisa, e eu não sei o que é :('

const niceBreakfeastOrBad = pao || manteiga || cafe ? 'Café da manhã top :)' : 'Faltou alguma coisa, e eu não sei o que é :('
// Qualquer coisa pode entrar na condicional ternário. functions arrays objects ...

console.log(niceBreakfeastOrBad)

// Maior de 18

let age = 18
const canDrive = age >= 18 ? "Can drive" : "Can't  drive"
// Qualquer coisa pode entrar na condicional ternário. functions arrays objects ...

console.log(canDrive)