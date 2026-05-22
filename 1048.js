let lines = ["800.01"];

let values = lines[0].split(" ").map(valor => Number(valor));

let salario = values[0];

let novoSalario = salario * 1.15;
let reajusteGanho = salario * 0.15;
let emPercentual = "15 %";

if(salario > 400){
    if(salario <= 800){
        novoSalario = salario * 1.12;
        reajusteGanho = salario * 0.12;
        emPercentual = "12 %";
    } else {
        if(salario <= 1200){
            novoSalario = salario * 1.1;
            reajusteGanho = salario * 0.1;
            emPercentual = "10 %";
        } else {
            if(salario <= 2000){
                novoSalario = salario * 1.07;
                reajusteGanho = salario * 0.07;
                emPercentual = "7 %";
            } else {
                novoSalario = salario * 1.04;
                reajusteGanho = salario * 0.04;
                emPercentual = "4 %";
            }
        }
    }
}
console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
console.log(`Reajuste ganho: ${reajusteGanho.toFixed(2)}`);
console.log(`Em percentual: ${emPercentual}`);

