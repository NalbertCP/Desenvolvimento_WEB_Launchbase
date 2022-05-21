// média dos alunos utilizando o recurso de objeto

const aluno1 = {
   nome:"Nalbert",
   nota: 5
}

const aluno2 = {
    nome: "Carlos",
    nota: 5
}

const aluno3 = {nome: "João",nota: 6}

console.log(typeof(aluno2))
console.log()

const media = (aluno1.nota+aluno2.nota+aluno3.nota)/3
console.log(media)

if (media<=5) {
    console.log("Que pena, você não foi aprovado.")
} else{
    console.log (`Parabéns você foi aprovado! Sua nota foi de ${media.toFixed(1)} pontos`)
}



