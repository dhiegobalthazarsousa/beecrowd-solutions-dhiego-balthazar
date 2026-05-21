let lines = ["0 24"];

let valores = lines[0].split(" ").map(numero => Number(numero));

if (valores[1] > valores[0]) {
    if (valores[1] % valores[0] === 0) {
        console.log("Sao Multiplos")
    } else {
        console.log("Nao sao Multiplos");
    }
} else {
    if (valores[0] % valores[1] === 0) {
        console.log("Sao Multiplos")
    } else {
        console.log("Nao sao Multiplos");
    }
}
