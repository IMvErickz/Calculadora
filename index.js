let numberP = parseInt(prompt('Digite o primeiro valor'))
let numberS = parseInt(prompt('Digite o segundo valor'))
let resulta = numberP / numberS
let operationCalc = prompt("Digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma e 4 para subtração: ")

function calc(calculator) {
    if (operation == 1) {
        let result = numberP / numberS
        document.write(numberP + "/" + numberS + "=" + result)
    } else if (operation == 2) {
        let result = numberP * numberS
        document.write(numberP + "x" + numberS + "=" + result)
    } else if (operation == 3) {
        let result = numberP + numberS
        document.write(numberP + "+" + numberS + "=" + result)
    } else if (operation == 4) {
        let result = numberP - numberS
        document.write(numberP + "-" + numberS + "=" + result)
    } else {
        document.write("<h2>Opção inválida</h2>")
    }
}

console.log(calc)

let teste = prompt('eu sou doidão')