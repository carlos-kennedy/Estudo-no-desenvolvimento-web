// #Variaveis
// O JS é uma linguagem fracamente tipada e dinâmica
// Variáveis não precisam ter um tipo previamente definido
// Podemos mudar o conteúdo da variável

// // Exemplo de variável de linguagem fortemente tipada
// let clima: String
// console.log(clima)

// Exemplo de variável de linguagem fracamente tipada (JS)
// Todas as variáveis do JS são dinâmicas, e que poderão mudar seu valor diversas vezes 

let clima = "Chovendo" //string
clima = true
let dia = 03 //number
dia = "03"
let ensolarado = false //boolean
ensolarado = "true"

// typeof mostra qual é o tipo da variável
console.log(typeof clima)
console.log(typeof dia)
console.log(typeof ensolarado)

// Na linguagem mais moderna do JS é padrão utilizar mais o let e o const.