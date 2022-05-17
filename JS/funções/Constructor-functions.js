// Funções construtoras 
// function () constructor
// Expressão new
// Criar um novo objeto
// this keyword


function Person(name) {
    this.name = name
    this.walk = () => {
        return 'andando'
    }
    this.sleep = () => {
        return 'esta domindo, ta com preguiça de andar'
    }
}

const carlos = new Person('Carlos')
const maria = new Person('Maria')

console.log(carlos.name, carlos.walk())
console.log(maria.name, maria.walk())
