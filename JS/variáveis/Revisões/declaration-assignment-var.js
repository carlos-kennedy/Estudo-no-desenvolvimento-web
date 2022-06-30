// Revisando com Variáveis e Tipos de dados

// Declaração or declaration
var name;

// Assignment or atribuição de valores
name = "Kennedy";

// Que tipo de dado foi colocado na varíável?
console.log(typeof name);

// Você pode agrupar as declarações com o ','

let age, isHuman;
age = 21;
isHuman = true + ` é humano`;

// Multiplos argumentos na função
console.log("As entradas de dados são:", name, age, isHuman);

// Escrita de texto com multiplos argumentos com variáveis

// Concatenando os valores
console.log('O ' + name + ' tem ' + age + ' anos')

// Interpolação de valores com template literals or template strings
console.log(`O ${name} tem ${age} anos`);
console.log(`O ${name} é humano? ${isHuman}`);
