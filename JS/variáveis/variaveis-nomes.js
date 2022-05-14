// ##Para criar nomes

// JS é case-sensitive (sensível ao caso)
// JS aceita a cadeia de caracteres Unicode (pode colocar aspas, acentuações ...)

// Posso:
// Iniciar com estes caracteres especias: $ _
// Iniciar com letras
// Colocar acentos
// Letras maiúsculsa e minúsculas fazem diferença

// Exemplos que podem ser aceitos:
// let Kennedy = 'Kennedy'
// let kennedy ='kennedy'
// let Kênnedy = 'Kênnedy'
// let kênnedy = 'kênnedy'
// let $varName = 'true'
// let $_io = "false"
// let _varNumb = 21

// console.log('São permitidos a serem usados para nomes de declarações de variáveis: ', Kennedy, kennedy, Kênnedy, kênnedy, $varName, $_io, _varNumb)

// Não posso:
// Iniciar com números
// Colocar espaços vazios no nome

// Exemplos que não são aceitos:
// let 230 = "230"
// let sou um nome vazio = "sou um nome vazio"

// console.log('Estes não podem ser aceitos como declaração de variável')

// Ideal:
// Criar nomes que fazem sentido
// Que explique o que a variável é ou faz
// cameCase  (Sempre que vier um espaço a próxima letra é maiúscula)
// snake_case  (Sempre que vier um espaço adicione um _ )
// Escrever em inglês
// Exemplos de variáveis ideiais

// Uma variável que vê quantos graus está hoje
let celsius = 40
console.log(celsius)

// Uma variável que receberá o nome da pessoa
let name = "Kennedy"
console.log(name)

// Uma variável em inglês com camelCase
let checkIfNameExists = name === "Kennedy"
console.log(checkIfNameExists)

// Uma variável com snake_case
let check_if_name_exists_and_its_kennedy = "Kennedy"
console.log(check_if_name_exists_and_its_kennedy)