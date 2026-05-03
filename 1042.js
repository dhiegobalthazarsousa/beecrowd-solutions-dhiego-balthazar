let lines = ["-14 21 7 -8"];

let valores = lines[0].split(" ");

let valoresRecebidos = lines[0].split(" ");

let menor = 0;

let troca = false;

let i = 0;


for (let j = 0; j < valores.length; j++) {
    let proximo = j + 1;
    if (proximo) {
        if (Number(valores[j]) > Number(valores[proximo])) {
            menor = valores[proximo];
            valores[proximo] = valores[j];
            valores[j] = menor;
            troca = true;
        }
    }
    if (troca && j === valores.length - 1) {
        troca = false;
        j = -1;
    }
}

for (valor of valores) {
    console.log(valor);
}

console.log("");

for (valorRecebido of valoresRecebidos) {
    console.log(valorRecebido);
}