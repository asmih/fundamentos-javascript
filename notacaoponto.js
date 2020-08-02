function obj(nome) {
    this.nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj1 = new obj('Yasmin')
const obj2 = new obj('Brabosa')

console.log(obj1.nome),
console.log(obj2.nome),
obj2.exec()

