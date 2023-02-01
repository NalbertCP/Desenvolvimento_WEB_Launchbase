var nome = [
    [],
    []
]
var i = 0
var j = 0

for(i=0; i<2;i++){
    for(j=0;j<3;j++){
        nome[i][j] = `(${i},${j})`
    }
}

for(i=0; i<2;i++){
    for(j=0;j<3;j++){
        console.log (nome[i][j])
    }
    console.log()
}