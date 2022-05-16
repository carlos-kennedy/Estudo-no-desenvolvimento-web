// Argumento e parâmetro (A.P)

// Pode ser utilizado dentro de variáveis
// Exemplo:


const sum = function (number1, number2) { // parâmetros (parameters) 
    // console.log(number1 + number2)
    // Isto é uma função anonima
    // function expression
    // function anonymous
}
// O console.log no escopo só funcionará dentro do escopo onde foi atribuido os valores da declaração onde estiver o function

sum(29, 32) //arguments or argumentos
// console.log(number1 + number2)

// Definindo um parâmetro de fora da variável

// Pode ser usado qualquer nome, exemplo abaixo está "number1" e "number2"

function multiplication(number1, number2) {
    // console.log(number1 * number2)
}

// Pode ser utilizado para fazer mais de um cálculo
multiplication(3, 39)
multiplication(54, 213)
multiplication(32, 1)


function MultiplyAndDivide(num1, num2, num3, num4) {
    // console.log(num1 * num2 * num3 / num4)
    total = num1 * num2 * num3 / num4
    return total
    // Uma função sempre que encontrar uma linha return ela interrompe sua função imediatamente e retorna o que vem na frente do "return" que no caso dessa função vem uma variável
}

// Pode adicionar mais de dois argumentos

// MultiplyAndDivide(30, 32, 12, 35)

// Adiconando com variável

let num1 = 40
let num2 = 34
let num3 = 21
let num4 = 53

// MultiplyAndDivide(num1, num2, num3, num4)

console.log(`o número 1 é ${num1}`)
console.log(`o número 2 é ${num2}`)
console.log(`o número 3 é ${num3}`)
console.log(`o número 4 é ${num4}`)
console.log(`O total é: ${MultiplyAndDivide(num1, num2, num3, num4)}`)


//" A FUNCTION RETORNA O VALOR"
// Por isso o total da multiplicação e divisão deu "Undefined"
// Para isso se adiciona o "Return" a expressão iniciada

// Não se pode usar o VAR dentro do escopo da function pode acarretar em bugs serissimos por conta da flexíbilidade dele

// Pode ser utilizado um LET bem de vez em quando dentro da function
