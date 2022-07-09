// Compara algum tipo de retorno baseado no tipo de entrada
// Divisivel por 3 => Fizz
// Divisivel por 5 => Buzz
// Valor divisivel tanto por 3 quanto por 5 => FizzBuzz
// Nao divisivel por 3 ou 5 => entrada
// Nao e um numero => 'Nao e um numero'

//Codigo que eu fiz -- SEM ERRO
const resultado = fizzBuzz(10);
console.log(resultado);

function fizzBuzz(entrada){
  if (typeof entrada !== 'number')
    return 'Nao e um numero';
  if (entrada % 3 === 0 && entrada % 5 === 0)
    return 'e um fizzbuzz';
  else if (entrada % 3 === 0)
    return 'E um Fizz';
  else if(entrada % 5 === 0)
    return 'E um Buzz';
  if (entrada % 3 !== 0 || entrada % 5 !== 0)
    return 'Nao e divisivel nem por 3 nem por 5'
}

//Codigo na aula que possui erro de nao tratar o fizzbuzz e nao ter o valor nao divisivel
const resultado2 = fizzBuzz(15);
console.log(resultado2);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'Nao e um numero';
    if (entrada % 3 === 0)
        return 'E um Fizz';
    if (entrada % 5 === 0)
        return 'E um Buzz';
    if (entrada % 3 === 0 && entrada % 5 === 0);
        return 'E um FizzBuzz';
    return entrada;
}