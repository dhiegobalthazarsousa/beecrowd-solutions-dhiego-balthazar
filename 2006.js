let lines = ["3", "4 1 1 2 1"]

let tipo = lines[0];

let respostas = lines[1].split(" ");

let quantidade = 0;

for(resposta of respostas){
    if(resposta === tipo){
        quantidade++;
    }
}

console.log(quantidade);