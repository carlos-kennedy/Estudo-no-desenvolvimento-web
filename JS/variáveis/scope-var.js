// #Scope
// Escopo determina a visibilidade de alguma variável no JS

// #Block statement
// Exemplo

// Vamos iniciar um bloco
{
    // aqui dentro é um bloco onde posso colocar qualquer código

} // Aqui fechamos 

// O bloco criará um novo escopo. Chamamos de 'block scoped' 

// Exemplo
// {
//     let x = 0
//     console.log(x)
// }

// Var
// Var é global e poderá funcionar fora de um campo de bloco

// scopo global 
// O var passou a existir aqui, e o valor dentro dela começou em outro lugar dentro de um outro escopo, por isso o valor deu undefined.

// O nome disso é: Hoisting (elevação)

// var x 

// console.log('> existe x antes do bloco? ', x)

// {
// x = 0
// }

{
    var x = 0 // scopo local, e onde esta o valor da var
}

// console.log('> existe x depois do bloco? ', x)

// OBS: O var é muito flexível para isso, por isso se deve utilizar mais o let e o const atualmente, para que possa evitar bugs confusos no futuro. 
