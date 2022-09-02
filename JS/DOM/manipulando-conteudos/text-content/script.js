// Manipulando o conteúdo
// textContent
// Pode ser usado para alterar o texto no site.
const element = document.querySelector("h1");
const elementP = document.querySelector("p");

elementP.textContent = "Vai ser uma grande aventura dessa vez com a DOM";
element.textContent = " Vamos para mais uma boa jornada de aprendizado";

// Concatenado
elementP.textContent += element.textContent;
