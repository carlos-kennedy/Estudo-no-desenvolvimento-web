// Praticando com variáveis dentro e fora do escopo junto com Arrays e functions ;D

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

// let total = 0

// const MultiplyAndDivide = function (numDivide, numMultiply, numMultiplyandDivide) {
//     // console.log(numDivide / numMultiply * numMultiplyandDivide)
//     let total = numDivide / numMultiply * numMultiplyandDivide
//     return total
// }

// const numDivide = 20
// const numMultiply = 30
// const numMultiplyandDivide = numDivide * numMultiply / numDivide * numMultiply

// console.log(`Os números armazenados são: ${numDivide}, ${numMultiply} e ${numMultiplyandDivide}`)

// console.log(`O resultado destes números são: ${MultiplyAndDivide(numDivide, numMultiply, numMultiplyandDivide)}`)
// console.log(total)


// Praticando functions com arrays / objects e variáveis
const reminderNotifications = function (reminderN, name) {
    // console.log(`O horário do ${name} de levantar da cama é ${reminderN[0].gettingOutOfBedHour}`)
    namesAndTimes = reminderN, name
    return namesAndTimes
}

let name = 'Kennedy'
let reminderN = []

let alarmMorning = {
    gettingOutOfBedHour: '6:00',
    timeToCoffe: '6:30',
    goToWorkHour: '8:00',

}

let alarmNight = {
    goHomeHour: '18:00',
    makeDinnerHour: '20:00',
    goToBedHour: '22:00'

}

reminderN = [
    alarmMorning, alarmNight

]

console.log(`O ${reminderNotifications(name)} acorda as: ${reminderNotifications(reminderN[0].gettingOutOfBedHour)}`)

console.log(`O ${reminderNotifications(name)} toma o seu cafézinho as: ${reminderNotifications(reminderN[0].timeToCoffe)}`)

console.log(`O ${reminderNotifications(name)} volta para casa as: ${reminderNotifications(reminderN[1].goHomeHour)}`)

console.log(`O ${reminderNotifications(name)} faz o seu jantar as: ${reminderNotifications(reminderN[1].makeDinnerHour)}`)

console.log(`O ${reminderNotifications(name)} faz o seu jantar as: ${reminderNotifications(reminderN[1].makeDinnerHour)}`)