// ### Questão 3

// Crie um objeto pessoa com as propriedades nome, idade e hobbies (um array com três hobbies). Use o método forEach para imprimir cada hobby da pessoa no console.

let objetoPessoa = {
    nome: "Gustavo",
    idade: 22,
    hobbies: ["Jogos", "Basquete", "Academia"],
}

objetoPessoa.hobbies.forEach(function(valores) {
    console.log(valores);
});

