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

const niceBreakfeastOrBad = pao || manteiga || cafe ? 'Café da manhã top :)' : 'Falto alguma coisa, e eu não sei o que é :('

console.log(niceBreakfeastOrBad)

// Maior de 18

let age = 18
const canDrive = age >= 18 ? 'Pode dirigir' : 'Não pode dirigir'

console.log(canDrive)