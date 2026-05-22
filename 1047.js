let lines = ["7 10 8 9"];

let values = lines[0].split(" ").map(valor => Number(valor));

let horaInicial = values[0];
let horaFinal = values[2];
let minutoInicial = values[1];
let minutoFinal = values[3];

if (horaInicial === horaFinal && minutoFinal === minutoInicial) {
    console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
} else {
    let horaTotal = horaFinal - horaInicial;
    let minutoTotal = minutoFinal - minutoInicial;
    if(horaTotal < 0){
        horaTotal = 24 + horaTotal;
    }
    if(minutoTotal < 0){
        minutoTotal = 60 + minutoTotal;
        horaTotal--;
        if(horaTotal < 0){
            horaTotal = 24 + horaTotal;
        }
    }
    console.log(`O JOGO DUROU ${horaTotal} HORA(S) E ${minutoTotal} MINUTO(S)`);
}
