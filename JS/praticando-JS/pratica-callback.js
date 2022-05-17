// Praticando...

function whatIsMyAge(age) {
    console.log('Esta é a minha idade:')
    age()

}

whatIsMyAge(
    () => {
        console.log(21)
    }
)


const name = (myName) => {
    console.log('Este é o meu nome: '), myName()
}

let carlos = 'Carlos'
name(
    () => {
        console.log(carlos)
    }
)