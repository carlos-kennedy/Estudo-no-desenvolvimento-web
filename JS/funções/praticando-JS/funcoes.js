// Praticando funções aqui

// functions constructor
function trainingFunction(name, age, nationality) {
  this.name = name;
  this.age = age;
  this.nationality = nationality;
  this.understandFunction = () => {
    return "entendeu como funciona uma função, e o que é uma função construtora";
  };
  this.didNotUnderstand = () => {
    return "não entendeu como funciona uma função..continue se esforçando";
  };
}

const person = new trainingFunction("Carlos Kennedy", 21, "Brasileiro");
const otherPerson = new trainingFunction("Isaac", 28, "Britânico");

console.log(
  `O ${person.name}, de 
  ${person.age} 
  anos ${person.understandFunction()}`
);

console.log(
  `O ${otherPerson.name}, de ${
    otherPerson.age
  } anos ${otherPerson.didNotUnderstand()}`
);

//Arrow function & callback function
const makeMyVitamin = (vitamin) => {
  console.log("Estou fazendo uma vitamina de banana");
  vitamin();
};

makeMyVitamin(() => {
  console.log("Faz uma pra mim também, por favor?");
});

// sistema escolar de notas

let score, scoreA, scoreB, scoreC, scoreD, scoreF;

scoreResults();

function scoreResults(score) {
  scoreA = score >= 90 && score <= 100;
  scoreB = score >= 80 && score <= 89;
  scoreC = score >= 70 && score <= 79;
  scoreD = score >= 60 && score <= 69;
  scoreF = score <= 60;

  if (scoreA) {
    console.log("Você tirou um A");
  } else if (scoreB) {
    console.log("Você tirou um B");
  } else if (scoreC) {
    console.log("Você tirou um C");
  } else if (scoreD) {
    console.log("Você tirou um D");
  } else if (scoreF) {
    console.log("Você tirou um F");
  } else {
    console.log("Nota invalida");
  }

  return score;
}

// function callback
const carlos = "Carlos é muito bonito!!";
function carlosIsBeautifull(carlos) {
  carlos();
}

carlosIsBeautifull(() => {
  if (carlos === "Carlos é muito bonito!!") {
    console.log("Nossa que homão gostoso");
  } else {
    console.log("É..até que tá mais arrumadinho vai");
  }
});
