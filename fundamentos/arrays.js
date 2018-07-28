const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) //os indices começam do 0
console.log(valores[4])

valores[4] = 10.6 //O js permite alterar o conteudo/os indices de um array que foi criado como constante, porem nao permite que eu mude o valor da constante
//funciona  -> valores[4] = 10.6
//erro      -> valores = [7, 8, 6, 9]
//Posso fazer uma atribuicao nas posicoes do array, porem nao posso fazer uma atribuicao direta na constante 

console.log(valores[4])
console.log(valores.length) //retorna o tamanho

valores.push('oi', 1, true) //adiciona elementos no array
console.log(valores)

console.log(valores.pop()) //exibe o ultimo elemento do array e deleta o valor e a posicao do array
console.log(valores)

delete valores[6] //deleta o valor do elemento do array mas mantem a posicao
console.log(valores)

console.log(typeof valores) //em js um array e um objeto