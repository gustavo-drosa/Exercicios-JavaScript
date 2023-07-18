// ### Questão 3

// Crie um array com os números de 1 a 10. Use o método filter para criar um novo array apenas com os números pares do array original. Imprima o novo array no console.

let arrayNumeros = [1,2,3,4,5,6,7,8,9,10];

let numerosPares = arrayNumeros.filter(function(pares){
    return pares % 2 === 0
})

console.log(numerosPares);