// Criando e adicionado elementos

// createElement
const elDiv = document.createElement("div");
elDiv.setAttribute("class", "souUmaDivComClasse");
elDiv.style.backgroundColor = "#c3c3c3";
elDiv.innerHTML = "Estou aprendendo cada vez mais a DOM";

// insertBefore
const elBody = document.querySelector("body");
const elScript = elBody.querySelector("script");
elBody.insertBefore(elDiv, elScript);

