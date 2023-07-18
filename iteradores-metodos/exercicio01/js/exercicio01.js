// ### Questão 1

// Crie um objeto pessoa com as propriedades nome, idade e hobbies (um array com três hobbies). Use o iterador for … in para imprimir cada propriedade do objeto no console.

let objetoPessoa = {
    nome: "Gustavo",
    idade: 22,
    hobbies: ["Jogos", "Basquete", "Academia"],
}

for (let key in objetoPessoa) {
    console.log(key + ": "+ objetoPessoa[key])
    }