// Adicionando classes ao elemento
// classList

const element = document.querySelector("body");
const elementDiv = document.querySelector("div");
const elementP = document.querySelector("p");
const elementH1 = document.querySelector("h1");

// element.classList.add("inBgActive");
// elementDiv.classList.add("inColorDiv")

console.log(element.classList);

// element.classList.add("inBgActive", "inBorderActive");

// element.classList.remove("inBgActive", "inBorderActive");

// O toggle primeiro pesquisa no documento, se a classe existir ele tira, se não ele adiciona.

element.classList.toggle("inBgActive", "inBorderActive");

elementDiv.classList.toggle("inColorDiv");

elementP.classList.toggle("paragraph");

elementH1.classList.toggle("title");
