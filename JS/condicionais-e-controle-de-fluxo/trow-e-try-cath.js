// trow

function sayMyName(name = "") {
  if (name === "") {
    throw "Nome é necessário aqui!";
  }

  console.log(name);
}

// try/catch

try {
  sayMyName("");
} catch (e) {
  console.log(e);
}

console.log("Após o try and catch");
