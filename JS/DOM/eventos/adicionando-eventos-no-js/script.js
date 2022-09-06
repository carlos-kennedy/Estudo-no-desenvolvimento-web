const elH1 = document.querySelector("h1");
const elBody = document.querySelector("body");

// É composto por dois elementos, qual o evento do usuário na tela, e o outro é a função que será ativa.

const changeBg = () => {
  elBody.style.backgroundColor = "#b13";
};

// Coloque apenas como um atalho sem os () pois se não ela será executada, deixando apenas como atalho ela ficará armazenada em memória.
elH1.addEventListener("click", changeBg);
