// Atribuindo function na variável
// const sum = function (number1, number2, number3, number4) {
//     total = number1 + number2 + number3 + number4
//     return total 
// }

// sum(30, 20, 10, 5)

// let number1 = 50
// let number2 = number1 + 30
// let number3 = number2 * 3
// let number4 = number3 + 20 - number1

// console.log(`O primeiro número é ${number1}`)
// console.log(`O segundo número é ${number2}`)
// console.log(`O terceiro número é ${number3}`)
// console.log(`O quarto número é ${number4}`)
// console.log(`O total da soma de todos números é ${sum(number1, number2, number3, number4)}`)


// E se eu definir uma variável fora do escopo da function com o mesmo nome da palavra chave?

let total = 0

const MultiplyAndDivide = function (numDivide, numMultiply, numMultiplyandDivide) {
    // console.log(numDivide / numMultiply * numMultiplyandDivide)
    let total = numDivide / numMultiply * numMultiplyandDivide
    return total
}

const numDivide = 20
const numMultiply = 30
const numMultiplyandDivide = numDivide * numMultiply / numDivide * numMultiply

console.log(`Os números armazenados são: ${numDivide}, ${numMultiply} e ${numMultiplyandDivide}`)

console.log(`O resultado destes números são: ${MultiplyAndDivide(numDivide, numMultiply, numMultiplyandDivide)}`)

console.log(total)