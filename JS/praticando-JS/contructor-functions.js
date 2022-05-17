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


function Students(name) {

    this.name = name

    this.failed = () => {
        // return this.name + ' Reprovado, tente de novo..'
        return  'Reprovado, tente de novo..'
    }
    this.approved = () => {
        return 'Aprovado, meus parábens!'
    }

}

const kennedy = new Students('Kennedy')
const marcos = new Students('Marcos')
const agatha = new Students('Agatha')
const tonpe = new Students('Tonpe')

console.log(`O aluno ${kennedy.name} foi: ${kennedy.approved()}`)
console.log(`O aluno ${tonpe.name} foi: ${tonpe.failed()}`)
console.log(`O aluno ${marcos.name} foi: ${marcos.approved()}`)
console.log(`A aluna ${agatha.name} foi: ${agatha.approved()}`)