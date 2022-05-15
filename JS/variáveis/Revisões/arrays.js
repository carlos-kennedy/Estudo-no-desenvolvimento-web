// Arrays

const animals = ['Lion', 'Tiger', 'Cat', 'Dog', 'Monkey',
    // Adicionando um objeto também
    {
        animal: 'Cat',
        namePet: 'Charllote',
        age: 7,
        weight: 20.3
    }
]
// 'length' é usado para saber o total de dados de dentro do Array

// Se não houver um dado em alguma posição no qual você colocou em [] o resultado será 'undefined'
console.log(animals[2], animals.length,
    // Object
    animals[5], animals[5].namePet)