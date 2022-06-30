function uGotIt(answer) {
  console.log("Você entedeu antes de executa o callback?");
  answer();
}

uGotIt(() => {
  console.log("Sim");
});

function iLuvU(answer) {
  console.log("Você me ama?");
  answer();
}

iLuvU(() => {
  console.log("Eu te amo!!");
});
