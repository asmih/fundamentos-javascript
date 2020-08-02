const saudacao = 'oi' //contexto lexico 1

function exec(){ //contexto lexico 2
    const saudacao = 'Tudo bem?'
    return saudacao
}

console.log(saudacao)
console.log(exec())

const cliente = {
    nome: 'Michelle',
    idade: 25,
    peso: 68,
    endereco:{
        logradoura: 'Av sapopemba',
        numero: 16082
    }
}

console.log(cliente)
