let lines = ["-14 21 7 -8"];

let valores = lines[0].split(" ");

let valoresRecebidos = lines[0].split(" ");

let menor = 0;

let troca = false;

let i = 0;


for(let j = 1; j < valores.length; j++){
    i = j - 1;
    if(Number(valores[i]) > Number(valores[j])){
        menor = valores[j];
        valores[j] = valores[i];
        valores[i] = menor;
        troca = true;
    }
    if(troca){
        troca = false;
        j = 0;
    }
}

for(valor of valores){
     console.log(valor);
}

console.log("");

for(valorRecebido of valoresRecebidos){
     console.log(valorRecebido);
}