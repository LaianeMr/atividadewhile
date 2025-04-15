const prompt = require("prompt-sync")()
const valorConta = parseFloat(prompt(" Qual o valor da conta?"))
const qtdCli = parseInt(prompt(" São quantos clientes?"))
const total = valorConta / qtdCli
console.log("Valor da conta", valorConta)
console.log("Número de clientes", qtdCli)
console.log("Valor por cliente", total)                               
