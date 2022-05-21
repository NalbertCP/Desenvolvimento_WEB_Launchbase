// cálculo da média utilizando funções

const turma1 = [
    {nome: "Nalbert", nota: 7},
    {nome: "Nayara", nota:8 },
    {nome: "Lucas", nota: 9}
]

const turma2 = [
    {nome: "Nalbert", nota: 3},
    {nome: "Nayara", nota:4 },
    {nome: "Lucas", nota: 5}
]

function calcmedia (turma){
    var media = (turma[0].nota + turma[1].nota + turma[2].nota)/3
    return media.toFixed(2)
}

var media1 = calcmedia(turma1)
var media2 = calcmedia(turma2)

function menssagem (media, turma){
    if (media<5) {
        console.log(`Infelizmente a nota da ${turma} foi menor que 5`)
    } else {
        console.log(`Parabéns! A nota da ${turma} foi de: ${media}`)
    }
}

menssagem(media1, "Turma 1")
menssagem(media2, "Turma 2")