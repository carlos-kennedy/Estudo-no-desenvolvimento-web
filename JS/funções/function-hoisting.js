// Function hoisting
// Sim, assim existe uma Hoisting da function

sayMyName();

function sayMyName() {
    console.log('Seu nome é Kennedy')
}

// Somente uma função do tipo statement como exemplo acima, sofrerá uma elevação

// Exemplo com CONST

// sayMyName();

// const sayMyName = function ()
// {console.log('É Kennedy')}

// O erro inesperado é por conta que const ou let não sofrerá hoisting.

// Exemplo com o VAR

// sayMyName();

// var sayMyName = function () {
    // console.log('Kennedy')}

// O erro foi por conta que o var trocou a função para uma "variável undefined"

// Se fizer uma função de uma maneira de expressão ela não vai sofrer uma elevação


