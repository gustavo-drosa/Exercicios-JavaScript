// ### Questão 4

// Crie um array com os números de 1 a 10. Use o método reduce para calcular a soma dos números do array original. Imprima o resultado no console.

let numerosArray = [1,2,3,4,5,6,7,8,9,10];

let somaNumeros = numerosArray.reduce(function(acumulador, numeros){
    return acumulador + numeros;
})

console.log(somaNumeros);