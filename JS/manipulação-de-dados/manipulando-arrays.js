// Manipulando Arrays

// Criar arrays com constructor
// Sem constructor
// let anyArray = [0, 1, 2, 3]

// let anyArray = new Array('Kennedy', 'Lindo', 'Bobão')
// console.log(anyArray)

// Contar elementos de um Array
// Cada elemento no array pode ser um tipo de dado diferente ({type: 'array'}) até mesmo uma função caso queira

console.log(['Kennedy',
    'Continue',
    function () {
        return 'Estou dentro de uma função'
    },
    function () {
        return 'Você saiu da função'
    }]
[3]())

console.log(['a', 3, 4, 5, 120, 20].length)

// Transformar uma cadeia de caracteres em elementos de um array

let word = 'Manipulação'
// Faz com que cada palavra do word se transforme em um elemento do Array
console.log(Array.from(word))


let techsStack = ['html', 'css', 'js']

// Adicionar um item no fim
// O metodo push faz com que coloque um elemento no final do Array
console.log(techsStack.push('nodeJS'))

// Adicionar no começo
// O metodo unshift faz com que coloque um elemento no começo do Array
console.log(techsStack.unshift('ReactJS'))

// Remover do fim
// O metodo pop faz com que remova um elemento no final do Array

// OBS: Cada vez que você coloque um pop diversas vezes ele irá continuar removendo os elementos 
// techsStack.pop()

// Remover do começo
// O metodo shift faz com que remova um elemento no começo do Array

// OBS: Cada vez que você coloque um shift diversas vezes ele irá continuar removendo os elementos 
// techsStack.shift()

// Pegar somente alguns elementos do Array
// O metodo slice ele corta o elemento.

// OBS: ele aceita dois argumentos e modos de usar, slice(1argumento, 2argumento) o 1 argumento é a posição de inicio que ele irá retirar para mim e o 2 argumento é até ele onde irá.
// console.log(techsStack.slice(1, 3))

// Remover 1 ou mais elementos de qualquer posição do Array
// O metodo splice faz com que ele remova um elemento do array.

// OBS: Ele aceita dois argumentos splice(1argumento, 2argumento) o 1 argumento diz onde ele começará e o 2 argumento dirá quantos ele retirará.
// techsStack.splice(1, 2)

// Encontrar a posição de um elemento no Array
// O metodo indexOf mostra onde e qual elemento está localizado.
// let index = techsStack.indexOf('js')

// console.log(index)

// Bonus

let index = techsStack.indexOf('ReactJS')
techsStack.splice(index, 1)

// console.log(index)
console.log(techsStack)