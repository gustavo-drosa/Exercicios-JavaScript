// ### Questão 2

// Crie um objeto pessoa com as propriedades nome, idade e hobbies (um array com três hobbies). Delete a propriedade hobbies do objeto pessoa. Imprima o objeto no console.

let objetoPessoa = {
    nome: "Gustavo",
    idade: 22,
    hobbies: ["Jogos", "Basquete", "Academia"]
}

delete objetoPessoa.hobbies;

console.log (objetoPessoa)