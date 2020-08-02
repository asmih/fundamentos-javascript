const pessoa = {
    nome: 'Yasmin',
    idade: 18,
    endreço: {
        logradouro: 'Av. sapopemba',
        numero: 16082
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const {nome: n, idade: i } = pessoa;
console.log(n, i)

const { sobrenome, humor = false } = pessoa;
console.log(sobrenome, humor)

const { endereco: { logradouro, numero, CEP }}
console.log(endereco)