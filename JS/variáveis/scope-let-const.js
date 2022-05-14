// #Scope
// Escopo determina a visibilidade de alguma variável no JS

// #Block statement
// Exemplo

// Vamos iniciar um bloco
{
    // aqui dentro é um bloco onde posso colocar qualquer código

} // Aqui fechamos 

// O bloco criará um novo escopo. Chamamos de 'block scoped' 

// #let e const
// Const e let serão apenas locais, por tanto funcionarão apenas no escopo onde foram criados
// Eles não receberão o mesmo tratamento com o var
// Eles não recebem o hoisting (elevação)

// console.log('> existe y antes do bloco? ', y)

// let declarado em escopo global
let y = 1

{
    // let y = 0
    // console.log('>existe y? ', y)

    y = 0
    console.log('>existe y? ', y)

    // o y poderá ter sua troca de valor dentro do escopo sem uma "palavra chave" (let), pois ele procurará um outro y em um outro escopo.
}

// Só não terá erro se for definido um let no scopo global
console.log('> existe y depois do bloco? ', y) 