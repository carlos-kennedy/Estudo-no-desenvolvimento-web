// Navegando pelo elementos
// parentNode parentELement

// parentNode faz uma busque no documento procurando quem é o nó (node) pai do elemento.

// o parentElement faz uma busca no document procurando quem é o elemento pai.

const elementBody = document.querySelector("body");
const elementDiv = document.querySelector("div");

console.log(elementBody.parentNode);
console.log(elementBody.parentElement);

console.log(elementDiv.parentNode);
console.log(elementDiv.parentElement);
