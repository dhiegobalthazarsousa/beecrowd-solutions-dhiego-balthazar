let lines = ["azur", "aala"];

let S = lines[0];
let T = lines[1];
let alfabeto = "abcdefghijklmnopqrstuvwxyz";

function avancar(alfabeto, letraAtual, letraNova){
    let contAvancar = 0;
    let i = alfabeto.indexOf(letraAtual);
    for(i ; i < alfabeto.length; i++){
        if(alfabeto[i] === letraNova){
            return contAvancar;
        } else {
            contAvancar++;
        }
        if(i === alfabeto.length - 1 ){
            i = -1;
        }
    }
}

function retroceder(alfabeto, letraAtual, letraNova){
    let contRetroceder = 0;
    let i = alfabeto.indexOf(letraAtual);
    for(i ; i < alfabeto >= 0; i--){
        if(alfabeto[i] === letraNova){
            return contRetroceder;
        } else {
            contRetroceder++;
        }
        if(i === 0 ){
            i = alfabeto.length;
        }
    }
}
let soma = 0;
for(let i = 0; i < S.length; i++){
    if(S[i] === T[i]){
        soma += 0;
    } else {
        let avanca = avancar(alfabeto, T[i], S[i]);
        let retrocede = retroceder(alfabeto, T[i], S[i]);
        if(avanca > retrocede){
            soma += retrocede;
        }else{
            if(avanca < retrocede){
                soma += avanca;
            }else{
                soma += avanca;
            }
        }
    }
}
console.log(soma);