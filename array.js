const valores = [7, 9, 8,10];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 5
console.log(valores);
console.log(valores.length);

valores.push(6, false, null, 'michelle')
console.log(valores)

console.log(valores.pop())
delete valores[3]
console.log(valores)

console.log(typeof valores)