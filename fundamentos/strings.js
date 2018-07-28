const escola = "Cod3r"

console.log(escola.charAt(4)) //as posições das letras começam no 0
console.log(escola.charAt(7)) //Quando passar uma posição que nao existe será retornado em branco
console.log(escola.charCodeAt(3)) //retorna o codigo do caracter na tabela unicode
console.log(escola.indexOf('3')) //retorna a posição do caracter na string

console.log(escola.substring(1)) //retorna os caracteres de uma string a partir da posição
console.log(escola.substring(0,3)) //retorna os caracteres da posição 0 até a posição 3

console.log('Escola '.concat(escola).concat('!!!'))
console.log('Escola ' + escola + '!!!')
console.log(escola.replace(3,'e'))

console.log('Ana,Maria,Pedro'.split(','))