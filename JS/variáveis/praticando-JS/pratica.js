// //  var
// // É o único das variáveis que possui Hoisting
// // É o mais flexível dos três

// var PraticedVarXNoteBefore = 30

// console.log('Sua nota estava em : ', PraticedVarXNoteBefore)
// {
//     var PraticedVarYNote = 65

//     {// Outro escopo dentro de um escopo 
//         PraticedVarYNote = 80
//     }

// }
// console.log(`Por recompensa de seu esforço, hoje sua nota é: `, PraticedVarYNote)
// console.log(`Somando suas notas de:`, PraticedVarXNoteBefore ,'+', PraticedVarYNote, `seu total de pontos é: ${PraticedVarXNoteBefore + PraticedVarYNote}, meus parábens!`)


// // let

// {
//     let PraticedLetCongratulations = "Parabéns você está começando a dominar as funções de escopo das variáveis do JS:  "
//     let PraticedLetDontGetDiscouraged = "Não desanima você está conhecendo um novo mundo cheio de oportunidades "
//     let PraticedLetUGood = " Você está se sentindo recompensado por está se esforçando cada vez mais nesta linguagem? "
//     let PraticedLetBooleanChoice = false
//     {
//         PraticedLetBooleanChoice = true
//     }
//     console.log(PraticedLetDontGetDiscouraged  + PraticedLetUGood + PraticedLetBooleanChoice)
// }

// // const

// const PraticedConstX = 30
// const PraticedConstY = 26

// console.log (`${PraticedConstX + PraticedConstY }`)
// {
//     // Valor de const não muda, a não ser que mude o valor inicial dele.
//     const PraticedConstX = 40
//     console.log (`Os valors das variáveis de const X e const Y são : ${PraticedConstX + PraticedConstY}`)
// }

