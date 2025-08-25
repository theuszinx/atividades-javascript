// 1) Função que verifica se um número é par ou ímpar
function verificaParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "O número " + numero + " é par.";
  } else {
    return "O número " + numero + " é ímpar.";
  }
}

// 2) Função que calcula o fatorial de um número
function fatorial(n) {
  let resultado = 1;

  for (let i = 1; i <= n; i++) {
    resultado = resultado * i;
  }

  return resultado;
}

// 3) Função que encontra o maior número em um array
function maiorNumero(array) {
  let maior = array[0]; // começa assumindo que o primeiro é o maior

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }

  return maior;
}

// Testando as funções
console.log(verificaParOuImpar(10));   // O número 10 é par.
console.log(verificaParOuImpar(7));    // O número 7 é ímpar.

console.log("Fatorial de 5 = " + fatorial(5)); // 120
console.log("Fatorial de 3 = " + fatorial(3)); // 6

console.log("Maior número = " + maiorNumero([4, 10, 2, 99, 7])) // 99