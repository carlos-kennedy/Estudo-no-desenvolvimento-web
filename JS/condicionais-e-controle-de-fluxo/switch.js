// Switch

// anatomia dele

// switch (expression) {
//   case "a":
//     // quantos códigos forem necessários aqui, até achar o..
// break é necessário para parar o case
//     break;
//   case "b":
//     //quantos códigos forem necessários aqui, até achar o..
//     break;

//   default:
//   // Se caso não executou nenhuma dos casos acima, ele irá parar aqui a expreção
//   break
// }

let expression = "C";

switch (expression) {
  case "a":
    console.log("a");
    break;

  case "b":
    console.log("b");

    break;

  default:
    console.log("default");

    break;
}

// exemplo em casos onde se pode utilizar

function calculate(number1, operator, number2) {
  let result = 1;

  switch (operator) {
    case "+":
      result = number1 + number2;
      break;

    case "-":
      result = number1 - number2;

      break;

    case "*":
      result = number1 * number2;

      break;

    case "/":
      result = number1 / number2;
      break;

    case "%":
      result = number1 % number2;
      break;

    case "**":
      result = number1 ** number2;
      break;

    default:
      console.log("Não há configurações disponiveis para este evento");
      break;
  }

  return result;
}

console.log(calculate(4, "%", 10));
