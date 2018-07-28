let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('Valores verdadeiros...') //todos os numeros inteiros sao verdadeiros, com excecao do zero
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //sem o espaco vazio fica false
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) //se o valor que esta sendo atribuido for true, resulta em true

console.log('Valores falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined) 
console.log(!!(isAtivo = false))

//Em um expressão 'ou' o js pode ser utilizado para apresentar a primeira expressao verdadeira

let nome = ''
console.log(nome || 'Desconhecido')

let nome2 = 'Victor'
console.log(nome2 || 'Desconhecido')