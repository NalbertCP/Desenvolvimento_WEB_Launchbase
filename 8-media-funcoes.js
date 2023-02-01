let Turma1 = [
    {nome: "João", nota: 7.5},
    {nome: "Carlos", nota: 8},
    {nome: "Fernanda", nota: 2},
    {nome: "Julia", nota: 5}
]

let Turma2 = [
    {nome: "Flavio", nota: 5.5},
    {nome: "Maria", nota: 3},
    {nome: "Jennifer", nota: 9},
    {nome: "Alberto", nota:4}
]


function med (turma){
    let soma = 0
    for (let i=0; i<turma.length; i++){
        soma = soma + turma[i].nota
    }
    let media = soma/turma.length
    if (media<5) {
        console.log(`Infelizmente a nota da turma foi menor 5.`)
    } else {
        console.log(`Parabéns! A nota da turma foi de ${media.toFixed(2)}`)
    }
}

function reprovado (turma){
    for (let i=0; i<turma.length;i++){
        if (turma[i].nota<5){
            turma[i].reprovado = true
        } else{
            turma[i].reprovado = false
        }
    } 
}

function imprimir (turma){
    for (let i=0; i<turma.length;i++){
        if (turma[i].reprovado == true){
            console.log(`O aluno ${turma[i].nome} está reprovado.`)
        }
    }
}
   
function rodar (turma){
    med (turma)
    reprovado(turma)
    imprimir(turma)
}

rodar(Turma1)
console.log()
rodar(Turma2)