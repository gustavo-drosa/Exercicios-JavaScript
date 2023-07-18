// ### Questão 2

// Crie um array com os números de 1 a 10. Use o método map para criar um novo array com o quadrado de cada número do array original. Imprima o novo array no console.

let arrayNumeros = [1,2,3,4,5,6,7,8,9,10];

let quadrados = arrayNumeros.map(function(numeros){
    return numeros*numeros;
});

console.log(quadrados);
