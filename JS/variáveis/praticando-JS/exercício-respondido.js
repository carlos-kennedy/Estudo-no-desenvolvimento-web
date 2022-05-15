//  1. Declare uma variável com nome weight
// 1.1 Atribua um valor a ela (opcional)

// 2. Diga que tipo de dado é essa variável

/*
let weight = 35.5
console.log (`O tipo de dado do weigth é: ${typeof weight}`)
*/

// 3. Declare uma variável e atribua valores para cada um dos dados
// -name: String
// -age: Number (integer)
// -stars: Number (float)
// -isSubscribed: Boolean

let name, age, stars, isSubscribed
name: 'Charllote'
age: 22
stars: 30.2
isSubscribed: true

// 4. A variável students abaixo é de que tipo de dado?



//  4.1. Atribua a ela as mesmas propriedades e valores do exercício 3



//   4.2. Mostre no console a seguinte mensagem:
//  <name> de idade <age> pesa <weight> kg.
//   Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.

let student = {
    name: 'Charllote',
    age: 22,
    weight: 35.5
}
// console.log(`A ${student.name} de idade ${student.age} pesa ${student.weight} kg`)


// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio


let students = []


// 6. Reatribua valor para a variável acima, colocando dentro dela o objeto da questão 4. (Não copiar e colar o objeto mas usar o objeto criado e inserir ele no Array)

students = [
    student
]

// 7. coloque no console o valor da posição zero do Array acima

// console.log(students[0])


// 8. Crie um novo objeto colocando ele na posição 1 do Array students

const carlos = {
    name: 'Carlos',
    age: 21,
    weight: 65.5
}

students = [
    student, carlos
]

console.log(students[1])

// 9. Sem rodar o código abaixo responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

/*
 console.log(a)
    var a = 1
    // Undefined, pois o var é uma variável flexível e possui um tratamento único de hoisting (elevação) o valor fica em baixo enquanto a declaração fica em cima do console.log
*/