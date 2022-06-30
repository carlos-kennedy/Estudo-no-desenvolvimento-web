//  1. Declare uma variável com nome weight
// 1.1 Atribua um valor a ela (opcional)

let weight = 59.3 + "kg";
// 2. Diga que tipo de dado é essa variável

console.log(typeof weight);

// 3. Declare uma variável e atribua valores para cada um dos dados
// -name: String
// -age: Number (integer)
// -stars: Number (float)
// -isSubscribed: Boolean

let name, age, stars, isSubscribed;
name: "Kennedy";
age: 21;
stars: 32.5;
isSubscribed: true;

// 4. A variável students abaixo é de que tipo de dado?

//  4.1. Atribua a ela as mesmas propriedades e valores do exercício 3

//   4.2. Mostre no console a seguinte mensagem:
//  <name> de idade <age> pesa <weight> kg.
//   Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.

let student = {
  name: "Kennedy",
  age: 21,
  stars: 32.5,
  isSubscribed: true,
};

console.log(typeof student);
console.log(
  `O ${student.name} de ${student.age} anos possuí ${student.stars} de estrelas`
);
console.log(`O ${student.name} é inscrito? ${student.isSubscribed}`);

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio

let students = [];

// 6. Reatribua valor para a variável acima, colocando dentro dela o objeto da questão 4. (Não copiar e colar o objeto mas usar o objeto criado e inserir ele no Array)

let studentIvan = {
  name: "Ivan",
  age: 19,
  stars: 45.1,
  isSubscribed: false,
};

students = [student, studentIvan];

// 7. coloque no console o valor da posição zero do Array acima

console.log(students[0].name, students[1].name);

// 8. Crie um novo objeto colocando ele na posição 1 do Array students

// 9. Sem rodar o código abaixo responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

// Undefined

// var a = 1;

// console.log(a);
