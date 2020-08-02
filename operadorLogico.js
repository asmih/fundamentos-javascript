function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTV32 = trabalho != trabalho2
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTV32, comprarTv50, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))