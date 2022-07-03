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

let spending = {
  incomes: [2000.87, 390.1, 1090.89, 10.34],
  expenses: [450, 164.9, 30.13, 20.94],
};

function sum(newArray) {
  let total = 0;
  for (let value of newArray) {
    total += value;
  }

  return total;
}

function calculateMyFamilyBalance() {
  const incomesBalance = sum(spending.incomes);
  const spendingBalance = sum(spending.expenses);

  const total = incomesBalance - spendingBalance;

  const weBalanceThisMouth = total > 0;

  let weBalanceText = "negativos";

  if (weBalanceThisMouth) {
    weBalanceText = "positivos!";
  } else {
    weBalanceText;
  }

  console.log(
    `Nós estamos ${weBalanceText} neste mês, o valor total dos nossos gastos foram: ${total.toFixed(
      2
    )}R$`
  );
}

calculateMyFamilyBalance();
