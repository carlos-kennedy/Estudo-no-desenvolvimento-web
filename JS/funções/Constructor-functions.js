// Funções construtoras
// function () constructor
// Expressão new
// Criar um novo objeto
// this keyword

function Person(name) {
  this.name = name;
  this.walk = () => {
    return "andando";
  };
  this.sleep = () => {
    return "esta domindo, ta com preguiça de andar";
  };
}

const carlos = new Person("Carlos");
const maria = new Person("Maria");

console.log(carlos.name, carlos.walk());
console.log(maria.name, maria.sleep());

function schoolPoints(name, points) {
  this.name = name;
  this.points = points;
  this.aproved = () => {
    return "aprovado, parabéns!!";
  };
  this.reproved = () => {
    return "infelizmente não passou..tente novamente";
  };
}

const erick = new schoolPoints("Erick", 200);
const amanda = new schoolPoints("Amanda", 160);

console.log(
  "O " +
    erick.name +
    " ficou com: " +
    erick.points +
    " na média " +
    "ele foi " +
    erick.aproved()
);

console.log(
  "A " +
    amanda.name +
    " ficou com: " +
    amanda.points +
    " na média " +
    "ela " +
    amanda.reproved()
);
