// Jeito que eu fiz
let valor = valores(2, 6);
console.log(valor)

function valores(primeiroValor, segundoValor){
    if (primeiroValor > segundoValor)
        return primeiroValor;
    else return segundoValor;
}

//Testar quando o primeiro e maior que o segundo
//Testar quando o segundo e maior que o primeiro
// Testar quando os dois sao iguais


// Jeito feito na aula

let valor2 = valores(2, 6);
console.log(valor2)

function valores(primeiroValor, segundoValor){
    return primeiroValor>segundoValor ? primeiroValor:segundoValor;
}