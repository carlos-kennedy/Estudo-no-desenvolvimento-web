let familySpending = {
  incomes: [2000, 350.96, 100.23, 98.9],
  expenses: [450.11, 100.09, 350.23, 609.1],
};

// Função que está somando
function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }

  return total;
}

// Função que estará calculando as despesas e entradas.
function calculateBalance() {
  const calculateIncomes = sum(familySpending.incomes);
  const calculateExpenses = sum(familySpending.expenses);
  const total = calculateIncomes - calculateExpenses;

  const weAreInBlue = total >= 0;

  let balanceText = "negativo";
  if (weAreInBlue) {
    balanceText = "positivo";
  }

  console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`);
}

calculateBalance();
