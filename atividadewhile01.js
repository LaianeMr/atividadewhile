var prompt = require ('prompt-sync')

console.log ("Escolha as opções + - / * % **");
let n1 = Number (prompt ("Digite o primeiro num"))
let n2 = Number (prompt ("Digite o segundo num"))
let operador = prompt(("Escolha uma opção"))

while(true)
 if (operador == "+"){
    console.log (n1+n2);
 }
 else if(operador =="-"){
     console.log(n1-n2)
 }
 else if (operador =="/"){
    if (n1==0 && n2 ==0){
        console.log ("valor nao pode ser definido");
    }
    else{
        console.log((1/n2). toFixed(2))
    }
 else if( operador == "*"){
    console.log (n1*n2)
 }
 else if (operador=="**"){
    console.log (n1%n2)
 }
 else if (operador== "**"){
    console.log (n1**n2)
 }
 let continuar = prompt ("digite sair para sair:")
 if (continuar == "sair"){
    break;
 }
 n1 = Number (prompt ("digite o primeiro num:"))
 operador = prompt(" escolha uma opção:")
 n2 = Number (prompt("digite o segundo num:"))
 }

