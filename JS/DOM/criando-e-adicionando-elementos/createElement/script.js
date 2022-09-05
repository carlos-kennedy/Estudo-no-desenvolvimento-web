// Criando e adicionado elementos

// createElement
const elementDiv = document.createElement("div");
elementDiv.setAttribute("class", "SouUmaDivComClasse");
elementDiv.innerText = "Sou uma div";

// append prepend

// Faz com que apreça dentro do html
console.log(elementDiv);
const elementBody = document.querySelector("body");

elementBody.append(elementDiv);

elementBody.prepend(elementDiv);
