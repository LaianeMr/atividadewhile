var  prompt = requestAnimationFrame(' prompt-sinc')()
console.log ("para sair escreva sair")
let nome =prompt ("Digite os nomes")
let nomes =''
while (nome!= "sair"){ 
    nomes = nomes + nome
    nome = prompt ( "Digite od nomes") 
}
console.log (nomes)