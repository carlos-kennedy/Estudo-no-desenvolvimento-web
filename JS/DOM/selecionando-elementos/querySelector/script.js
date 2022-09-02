// querySelector()
// Só pega apenas um elemento e o primeiro no documento
// Pode buscar qualquer elemento dentro do documento

// CLASS
const elementExample = document.querySelector(".paragraph");
const elementExample2 = document.querySelector(".title");

// ID
const elementExample3 = document.querySelector("#title");
const elementExample4 = document.querySelector("#paragraph");

// Atributos
const elementExample5 = document.querySelector("[src]");
const elementExample6 = document.querySelector("[http-equiv]");

console.log(elementExample);
console.log(elementExample2);
console.log(elementExample3);
console.log(elementExample4);
console.log(elementExample5);
console.log(elementExample6);
