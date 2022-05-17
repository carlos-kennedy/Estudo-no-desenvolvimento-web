// callback function
// Vai chamar uma função e vai chamar outra de volta


// Guardou na memória
function sayMyName(name) {
    console.log('Antes de executar a função de callback')

    // Esta é a função que foi trazida de volta para a memória
    name()

    console.log('Depois de executar a função de callback')
}

// Ao executar enviou de volta para a memória
sayMyName(
    () => {
        console.log('Estou aprendendo callback')
    }
)