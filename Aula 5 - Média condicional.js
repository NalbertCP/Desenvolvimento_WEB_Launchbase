//programa para calcular a média
//e retornar uma uma menssagem de 
//aprovação ou não

const nome1 = "Nalbert"
const nota1 = 7.5

const nome2 = "João"
const nota2 = 5.4

const nome3 = "Rafael"
const nota3 = 7.5

const media = (nota1 + nota2 + nota3)/3

if (media < 5 ){
    console.log()
    console.log("A média é menor que 5.00")
}else {
    console.log()
    console.log(`Parabéns! sua nota foi de ${media.toFixed(2)} pontos`)
}