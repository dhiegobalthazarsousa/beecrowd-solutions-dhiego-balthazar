let lines = ["16 2"];

let valores = lines[0].split(" ").map(valor => Number(valor));

if(valores[0] === valores[1]){
    console.log("O JOGO DUROU 24 HORA(S)");
} else {
    let soma = 0;
    for(let i = valores[0]; i !== valores[1]; i++){
        if(i === 23){
            i = -1;
        }
        soma++;
    }
    console.log(`O JOGO DUROU ${soma} HORA(S)`);
}