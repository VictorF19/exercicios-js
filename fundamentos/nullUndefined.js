//As atribui��es de variaveis que contem objetos e por padrao atribui�ao por referencia
//As atribui��es de variaveis que contem tipos primitivos e por padrao atribui�ao por valor

let valor //n�o inicializada
console.log(valor)

valor = null //variavel nao esta apontando para nenhum endere�o de memoria, ausencia de valor

console.log(valor)
//console.log(valor.toString())  //Erro!

const produto = {}
//console.log(produto.preco) - undefined
//console.log(produto.preco.a) - Erro!
console.log(produto)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined
console.log(produto)