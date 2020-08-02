let isAtivo = false
console.log(isAtivo)

isAtivo = true;
console.log(isAtivo)

console.log('valores verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!![])
console.log(!!{})
console.log(!!(isAtivo = true))

console.log('os valores falsos...')
console.log(!!0)
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo = false))