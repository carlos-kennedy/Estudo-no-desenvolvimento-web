// Manipulando elementos
// Atributos

const element = document.querySelector("div");

element.setAttribute("id", "souUmaDivComUmId");
element.setAttribute("class", "souUmaDivComUmaClasse");

console.log(element);

const elementID = document.querySelector("#souUmaDivComUmId");
console.log(elementID);

const elementClass = document.querySelector(".souUmaDivComUmaClasse");
console.log(elementClass);

console.log(elementClass.getAttribute("class"));
console.log(elementID.getAttribute("id"));

element.removeAttribute("class");
console.log(element.removeAttribute("class"));

element.removeAttribute("id");
console.log(element.removeAttribute("id"));

element.setAttribute("class", "bg fundo");
