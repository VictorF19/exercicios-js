var a = 3
let b = 4

var a = 30
b = 40

//Ao redeclarar a variável com let, acusa erro "Identifier 'b' has already been declared"

console.log(a,b)

a = 300
b = 400

console.log(a,b)

const c = 5
//Ao redefinir o valor de uma const, acusa erro "Assignment to constant variable." -> c = 50
console.log(c)