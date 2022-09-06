// argumento event
// Ele informa qual o tipo de evento ou qual você esta utilizando.
const elInput = document.querySelector("input");

elInput.onkeypress = function (event) {
  console.log(event);
  // Pode pegar a tecla digitada
  console.log(event.key);

  // Pode pegar o alvo/elemento que está sendo utilizado pelo evento (target)
  console.log(event.currentTarget);

  // Pode pegar o valor do elemento alvo
  console.log(event.currentTarget.value);
};
