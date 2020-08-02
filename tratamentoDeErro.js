function tratarELancarErro(erro) {
    throw new Error('Ocorreu um erro')
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!') 
    } catch (e) {
        tratarELancarErro()
    } finally {
        console.log('final')
    }
}
const obj = {name: 'Yasmin'}
imprimirNomeGritando(obj)