// Argumento e parâmetro (A.P)

// Pode ser utilizado dentro de variáveis
// Exemplo:


const sum = function (number1, number2) { // parâmetros (parameters) 
    console.log(number1 + number2)
    // Isto é uma função anonima
    // function expression
    // function anonymous
}
// O console.log no escopo só funcionará dentro do escopo onde foi atribuido os valores da declaração onde estiver o function

sum(29, 32) //arguments or argumentos
// console.log(number1 + number2)

// Definindo um parâmetro de fora da variável
function multiplication(number1, number2) {
    console.log(number1 * number2)
}

multiplication(3, 39) // arguments 