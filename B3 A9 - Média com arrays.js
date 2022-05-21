// media com arrays simples
const nomes =["Nalbert", "Ítalo", "Fernando"]
const notas =[7, 5, 9]

const media = (notas[0]+notas[1]+notas[2])/3

console.log(`Lista dos nomes: ${nomes}`)
console.log(`Lista das notas: ${notas}`)
console.log("Média = ",media.toFixed(2))
console.log()

//media com array de objetos
const alunos = [
    {nome: "Nalbert", nota: 7},
    {nome: "Calos", nota: 5},
    {nome: "João", nota: 9}
]
const mediax = (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3
console.log(`Lista dos alunos: ${alunos[0].nome}, ${alunos[1].nome}, ${alunos[2].nome}`)
console.log(`Lista das notas: ${alunos[0].nota}, ${alunos[1].nota}, ${alunos[2].nota}`)
console.log("Média = ", mediax.toFixed(2))

