let student = {
    name: 'Carlos',
    age: 21,
    course: 'Analyst and developer',
    currentSituation: 'Attending higher education'
}

students = []

students = [
    student,
    // [1]
    newStudent = {
        name: 'Charllote',
        age: 23,
        course: 'Software engineer',
        currentSituation: 'Attending higher education and Intern'
    },
    // [2]
    newStudent = {
        name: 'Kin',
        age: 21,
        course: 'Computer science',
        currentSituation: 'Attending higher education and Working'
    }
]

let transferStudent = {
    name: 'Emilly',
    age: 31,
    course: 'Design',
    currentSituaton: 'Working'
}

transferStudents = [
    transferStudent,
    transferStudent = {
        name: 'John',
        age: 28,
        course: 'Arts',
        currentSituation: 'Working'
    },
    transferStudent = {
        name: 'Paul',
        age: 24,
        course: 'Software engineer',
        currentSituation: 'Attending higher education'
    }

]

console.log(`______________Sobre os alunos que foram transferidos______________`)

console.log(`Os estudantes que foram transferidos são: ${transferStudents[0].name}, ${transferStudents[1].name} e ${transferStudents[2].name} tendo interesses em diferentes áreas de estudo`)

console.log('___________________________________________________________')

console.log(`Sendo ${transferStudents[0].name} se formando em ${transferStudents[0].course} e já trabalhando com ${transferStudents[0].course}`)

console.log('___________________________________________________________')
console.log(`Sendo ${transferStudents[1].name} se formando em ${transferStudents[1].course} e já trabalhando com ${transferStudents[1].course}`)

console.log('___________________________________________________________')
console.log(`Sendo ${transferStudents[2].name} se formando em ${transferStudents[2].course}`)

console.log('___________________________________________________________')













console.log('______________Sobre os alunos novos_______________')

console.log(`Os estudantes novos são: ${students[0].name}, ${students[1].name} e ${students[2].name} tendo interesse de estudo nas áreas de tecnologia`)
console.log('___________________________________________________________')
console.log(`Sendo ${students[1].name} se formando como uma ${students[1].course}`)
console.log('___________________________________________________________')
console.log(`Sendo ${students[2].name} se formando em ${students[2].course}`)
console.log('___________________________________________________________')
console.log(`Sendo ${students[0].name} se formando como um ${students[0].course}`)
console.log('___________________________________________________________')
console.log(`Todos são novos e adquirindo experiência ainda, como: 
${students[0].name} que tem ${students[0].age} anos, ${students[1].name} que tem ${students[1].age} anos e ${students[2].name} que tem ${students[2].age} anos`)
console.log('___________________________________________________________')
console.log(`O ${students[0].name} e o ${students[2].name} são os mais novos na área da tecnologia`)






