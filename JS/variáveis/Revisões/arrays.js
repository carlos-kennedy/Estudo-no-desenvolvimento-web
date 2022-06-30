// Arrays

const animals = [
  "Lion",
  "Tiger",
  "Cat",
  "Dog",
  "Monkey",
  // Adicionando um objeto também

  {
    animal: "Cat",
    namePet: "Charllote",
    age: 7,
    weight: 20.3,
  },
];
// 'length' é usado para saber o total de dados de dentro do Array

// Se não houver um dado em alguma posição no qual você colocou em [] o resultado será 'undefined'
// console.log(
//   animals[2],
//   animals.length,
//   // Object
//   animals[5],
//   animals[5].namePet
// );

const familyData = [
  {
    name: "Yasmin",
    age: 21,
    work: "developer",
    salary: 2300,
  },

  {
    name: "Diego",
    age: 31,
    work: "autonomous",
    salary: 3500,
  },

  {
    name: "Emanuel",
    age: 65,
    work: "retired",
  },
];

console.log(familyData.length);
console.log(typeof familyData[2]);
console.log(
  `O seu ${familyData[2].name} de ${familyData[2].age} está ${familyData[2].work} no momento`
);
