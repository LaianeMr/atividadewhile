const prompt = require("prompt-sync")()
const numero = parseInt(prompt( "digite um numero"))
const anterior = numero -1
const posterior = numero +1
console.log (" o numero anterior é: ", anterior)
console.log (" o numero posterior é: ", posterior)