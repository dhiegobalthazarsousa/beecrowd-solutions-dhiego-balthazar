let lines = ["2 2 2 2"];

let valores = lines[0].split(" ");

let soma = 0;

for(index in valores){
    soma += Number(valores[index]);
}

console.log(soma-3);