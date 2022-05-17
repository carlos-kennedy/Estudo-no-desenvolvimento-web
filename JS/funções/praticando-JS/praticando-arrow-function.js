const school = (teachers, newStudents) => {
    studentsAndTeachers = teachers, newStudents
    return studentsAndTeachers
}

// console.log(school(nameStudent1))

const marcos = {
    name: 'Marcos',
    age: 45,
    teach: 'Portuguese'
}

const priscilla = {
    name: 'Priscilla',
    age: 45,
    teach: 'Math'
}

const ezequiel = {
    name: 'Ezequiel',
    age: 45,
    teach: 'English'
}

const tania = {
    name: 'Tânia',
    age: 45,
    teach: 'French'
}

const studentCarlos = {
    name: 'Carlos',
    age: 21
}

const studentMaria = {
    name: 'Maria',
    age: 20
}

const studentDaniel = {
    name: 'Daniel',
    age: 23
}

const studentCris = {
    name: 'Cris',
    age: 21
}

const studentRicardo = {
    name: 'Ricardo',
    age: 25
}

let teachers = [
    marcos, priscilla, ezequiel, tania
]

let newStudents = [
    studentCarlos, studentMaria, studentDaniel, studentCris, studentRicardo
]

console.log(`Os professor que irão lecionar nas turmas do ensino médio serão: ${school(teachers[0].name)}, ${school(teachers[1].name)}, ${school(teachers[2].name)} e ${school(teachers[3].name)}`)

console.log(`Os alunos novos são: ${school(newStudents[0]).name}, ${school(newStudents[1].name)}, ${school(newStudents[2]).name}, ${school(newStudents[3]).name} e ${school(newStudents[4]).name}`)

console.log(`Os alunos: ${school(newStudents[0].name)} e ${school(newStudents[1].name)} irão ter aulas de: ${school(teachers)[0].teach} e ${school(teachers[1].teach)} com os professores ${school(teachers[0].name)} e ${school(teachers[1].name)}`)

console.log(`Os alunos: ${school(newStudents[2].name)} e ${school(newStudents[3].name)} irão ter aulas de: ${school(teachers)[2].teach} e ${school(teachers[3].teach)} com os professores ${school(teachers[2].name)} e ${school(teachers[3].name)}`)

console.log(`Os alunos: ${school(newStudents[3].name)} e ${school(newStudents[4].name)} irão ter aulas de: ${school(teachers)[3].teach} e ${school(teachers[1].teach)} com os professores ${school(teachers[3].name)} e ${school(teachers[1].name)}`)