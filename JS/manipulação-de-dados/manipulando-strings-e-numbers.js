// Manipulando strings e numbers
// Transformar strings para numbers e numbers para strings

// let string = '20'
// nunca esqueça coloque em maiúsculo o inicio das declarações das funções
// console.log(Number(string))

// let number = 32
// Não é obrigatório adiciona-los no console.log, demonstração usada apenas para mostrar na tela
// console.log(String(number) + 20)

// Contar quantos caracteres tem em uma palavra e quantos dígitos tem um número

let Word = 'Kennedy'
console.log(word.length)

let anyNumber = 2983132
console.log(String(anyNumber).length)

// Transformando um número quebrado com 2 casa decimais e trocar pontos por vírgula

let number = 231.120
// O que estiver atrelado a o number podem ser chamado de metodos também.
// O replace funciona assim, "replace(1 opção, 2 opção)" ele trocará a primeira opção pela segunda
console.log(number.toFixed(2).replace(".", ","))

// Transformando letras minúsculas e maiúsculas. faça o contrário disso também.

let anyWord = 'Olá, como estou formatado?'

console.log(anyWord.toUpperCase())

console.log(anyWord.toLowerCase())

// Verificando se na frase abaixo exite a palvra "Amor"
// Este metodo é case sensitive a palavra que ele encontrar tem que ser idêntica a ela.

// let phraseWithLove = 'Tenho muito por estar aprendendo algo no qual me identifico!'
// console.log(phraseWithLove.includes('Amor'))

// Separe um texto que contém espaços, em um novo Array onde todo o texto é uma posição do Array. Depois disso, transforme o array em um texto e onde eram os espaços adicione _

let phrases = 'Eu quero viver o Amor e a liberdade!'

// O split faz com que separe as palavras com o argumento dentro dele, no caso foi o espaço

// O join faz com que junte o que tiver no argumento dentro dele
let anyArray = phrases.split(" ")
console.log(anyArray)

let phraseWithUnderscore = anyArray.join("_")
console.log(phraseWithUnderscore)