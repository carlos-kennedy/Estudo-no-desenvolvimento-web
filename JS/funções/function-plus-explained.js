// Function de uma maneira lúdica
// Pense que a function é um liquidificador

function makeVitamin(fruit1, fruit2, fruit3, liquids) {
  console.log("Fiz uma vitamina de " + fruit1);

  return `Os ingredientes foram estes: ${fruit1}, ${fruit2}, ${fruit3} e ${liquids}`;
}

const copo = makeVitamin("Banana", "Maçã", "Morango", "Leite");

console.log(copo);

function makeJuiceOrange(fruit1, liquid, extra) {
  console.log("Fiz um suco de " + fruit1);
  return `Os ingredientes foram: ${fruit1} ${liquid} ${extra}`;
}

const glass = makeJuiceOrange("laranja", "agua", "gelo");

console.log(glass);
