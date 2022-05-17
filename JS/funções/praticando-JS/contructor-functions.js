// function Person(name) {
//     this.name = name
//     this.walk = () => {
//         return 'andando'
//     }
//     this.sleep = () => {
//         return 'está domindo, ta com preguiça de andar'
//     }
// }

// const carlos = new Person('Carlos')
// const maria = new Person('Maria')

// console.log(carlos.name, carlos.walk())
// console.log(maria.name, maria.walk())
// console.log(`O ${carlos.name} ${carlos.sleep()}`)


function Person(name) {
    this.name = name
    this.kennedyAge = () => {
        return 21
    }
    this.marcosAge = () => {
        return 34
    }

}

const kennedy = new Person('Kennedy')
const marcos = new Person('Marcos')

console.log(kennedy.name, kennedy.kennedyAge())
console.log(marcos.name, marcos.marcosAge())