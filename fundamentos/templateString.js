const nome = 'Larissa'
const concatenacao = 'Olá ' + nome + '!'

const template = `
    Olá
    ${nome}!
`
console.log(concatenacao,template)

const lerolero = `
Assim mesmo, a revolução dos costumes auxilia a preparação e a composição das novas proposições.
Neste sentido, a complexidade dos estudos efetuados afeta positivamente a correta previsão das 
diretrizes de desenvolvimento para o futuro. Nunca é demais lembrar o peso e o 
significado destes problemas, uma vez que a contínua expansão de nossa atividade não pode mais
se dissociar do fluxo de informações.
`
console.log(lerolero)

//expressões no template
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('Cuidado!!')}`)