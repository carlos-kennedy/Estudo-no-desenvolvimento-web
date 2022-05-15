const carlos = {
    name: 'Carlos',
    age: 21,
    weight: 59.9,
    hobby: "Programming"
}

const charllote = {
    name: 'Charllote',
    age: 21,
    weight: 38.9,
    hobby: "Listen to music"
}

const karol = {
    name: 'Karol',
    age: 19,
    weight: 38.3,
    hobby: 'Draw'
}

const daniel = {
    name: 'Daniel',
    age: 25,
    weight: 65.9,
    hobby: 'To knit'
}

const pedro = {
    name: 'Pedro',
    age: 23,
    weight: 75.5,
    hobby: 'Play games'
}

const patrick = {
    name: 'Patrick',
    age: 19,
    weight: 48.1,
    hobby: 'Play soccer'
}

let newStudent = {
    carlos, karol, charllote
}

// console.log(carlos.name, karol.name, charllote.name)

let transferStudents = {
    daniel, pedro, patrick
}

// console.log(daniel.name, pedro.name)

let allStudents = [
    newStudent, transferStudents
]

// console.log(allStudents)

console.log(`Os novos alunos são ${allStudents[0].carlos.name} ${allStudents[0].charllote.name} ${allStudents[0].karol.name} e os tranferidos de outra escola são ${allStudents[1].daniel.name} ${allStudents[1].pedro.name} ${allStudents[1].patrick.name}`)

console.log(`O hobby do ${allStudents[0].carlos.name} é ${allStudents[0].carlos.hobby}`)

console.log(`O hobby do ${allStudents[0].charllote.name} é ${allStudents[0].charllote.hobby}`)

console.log(`O hobby do ${allStudents[0].karol.name} é ${allStudents[0].karol.hobby}`)

console.log(`O hobby do ${allStudents[1].daniel.name} é ${allStudents[1].daniel.hobby}`)

console.log(`O hobby do ${allStudents[1].pedro.name} é ${allStudents[1].pedro.hobby}`)

console.log(`O hobby do ${allStudents[1].patrick.name} é ${allStudents[1].patrick.hobby}`)