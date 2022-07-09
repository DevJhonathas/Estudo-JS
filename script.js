/*Objeto*/

let nome = 'Jhonathas';
let idade = 18;
let estaAprovado = true;
let sobrenome = undefined;

let pessoa = {
    nome: 'Jhonathas',
    idade: 18,
    estaAprovado: true,
    sobrenome: undefined
};

console.log(pessoa);

//Arrays

let familia = [24, 25, 55, 52];
var familia2 = [24, 25, 'jhonathas', 32];
console.log(familia[2]);
console.log(familia2.length);

// Funcition

// Verbo + substantivo
/*Exemplos para nomear function
resetaCor
transformaObjeto
ordernaTamanho*/

let corSite = "blue";
function resetaCor(){
    corSite = "";
};
console.log(corSite);
resetaCor();
console.log(corSite);

//Parametros

let corSite2 = "blue";
function restaCor2(cor, tonalidade){
    corSite2 = cor + ' ' + tonalidade;
};

console.log(corSite2);
resetaCor("vermelho","claro");
console.log(corSite2)

//Tipos de functions

//1º Realiza uma tarefa, não devolve nada
function dizerNome(){
    console.log("Jhonathas");
};

dizerNome()

//2º Faz um calculo ou operação que retorna algo
function MultiplcarPorDois(valor){
    return valor * 2;
};
console.log(MultiplcarPorDois(5));
let resultado = MultiplcarPorDois(5);
console.log(resultado);

//Operadores no Javascript
/*Operadores Aritiméticos(matemáticos)
Operadores atribuicao
Operadores de comparação
Operacao lógicos
Operadores bitewise*/

//Operadores Aritiméticos
let salario = 100;

// +, -, *, /, **

console.log(salario + salario); // Soma
console.log(salario - salario); // Subtracao
console.log(salario * salario); // Multiplicacao
console.log(salario / salario); // Divisão
console.log(salario ** 5); //Exponencial
 
// ++ Incrementa       -- Descrementa

let idade2 = 18;
console.log(idade++); // Dessa forma ele aparece somente no proximo log
console.log(idade);

console.log(idade--); // Dessa forma ele aparece somente no proximo log
console.log(idade);



console.log(++idade); // Desa forma ele mostra no log já calculado
console.log(--idade); // Desa forma ele mostra no log já calculado


// Operadores de atribuição no Javascript

// =
// valor = bvalor

// +=, -=, *=, /=, **=
// valor = valor + valor;
let valorPC = 100;
valorPC += valorPC;
console.log(valorPC);


// Operadores de igualdade no Javascript

//igualdade estrita
console.log(1 === 1); // TRUE //Está comparando não somente o valor mas o tipo também.
console.log('1' === 1); // FALSE

//Igualdade solta
console.log(1 == 1);  // TRUE // Está comparando somente o valor
console.log(1 == '1'); //TRUE // Não é muito recomendado usar com 2 iguas, mas sim com 3 iguas

// Operador ternário

// tem um cliente, 100 premium, comum
let pontos = 200; 
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);


//Operadores lógicos
// Temos três logicos: e = &&
// Retorna true se os dois foram true
console.log(false && false);

let maiorDeIdade = false;
possuiCarteiraDeTrabalho = true;
podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
console.log(podeAplicar); // FALSO

// Temos três logicos: ou = ||
// Retorna true se um dos dois forem true

let maiorDeIdade2 = false;
possuiCarteiraDeTrabalho2 = true;
podeAplicar2 = maiorDeIdade2 || possuiCarteiraDeTrabalho2;
console.log(podeAplicar2); // TRUE


// Operador NOT = !
let maiorDeIdade3 = false;
possuiCarteiraDeTrabalho3 = false;
podeAplicar3 = maiorDeIdade3 || possuiCarteiraDeTrabalho3;
let cadidatoRecusado = !podeAplicar3;

console.log(cadidatoRecusado); //TRUE


//Comparacao nao boleanos

//falsy = [
//     undefined
//     null
//     0
//     false
//     ''
//     NaN - not a number
// ]

//Trusthy - Sao valores que nao sao os do falsy

let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil); //Vermelho


//IF e Else 

// Se a hora estiver entre 06:00 ate 12:00 : Bom dia!
// Se a hora estiver entre 12:00 ate 18:00 : Boa tarde!
// Caso o contrario : Boa noite!
let hora = 10;

if (hora > 6 && hora < 12){
    console.log('Bom dia!');
}
else if(hora > 12 && hora < 18){
    console.log('Boa tarde!');
}
else{
    console.log('Boa noite!');
}

//Switch e Case

let permissao; //Comum, gerente, diretor
switch (permissao){
    case 'comum' :
    console.log('Usuario comum');
    break;

    case 'gerente' :
    console.log('Usuario gerente');
    break;

    case 'diretor' :
    console.log('Usuario diretor');
    break;

    default: 
    console.log('Usuario nao reconhecido')
}

// Lacos de repticao - No Javascript temos 5 tipos de loopings

