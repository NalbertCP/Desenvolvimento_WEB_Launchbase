const turma1 = [
    {nome: "Nalbert", nota: 5},
    {nome: "Carlos", nota: 7},
    {nome: "João", nota: 9},
    {nome: "Joãos", nota: 15}
]
const turma2 = [
    {nome: "Pedro", nota: 7},
    {nome: "Rafael", nota: 2},
    {nome: "Maria", nota: 3}
]

function media (turma){
    let soma = 0
    for (let i=0; i<turma.length; i++){
        soma = soma + turma[i].nota    
    }
    const media = soma/turma.length
    return media
}
const media1 = media(turma1)
const media2 = media(turma2)

console.log(media1)
console.log(media2)
console.log()


// media de valores da turma com critério de para
function med (turma){
    let i=0
    let somax = 0
    while (i<turma.length) {
        somax = somax + turma[i].nota
        i++
    }
    const mediax = somax/turma.length
    return mediax
}

const med1 = med(turma1)
const med2 = med(turma2)

console.log(med1)
console.log(med2)




