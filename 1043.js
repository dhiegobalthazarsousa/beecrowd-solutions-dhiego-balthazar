let lines = ["6.0 4.0 2.1"];

let valores = lines[0].split(" ").map(numero => Number(numero));

let A = valores[0];
let B = valores[1];
let C = valores[2];

if((A + B > C && B + C > A && C + A > B) && (A - B < C && A - C < B && B - C < A)){
    console.log(`Perimetro = ${(A + B + C).toFixed(1)}`);
} else {
    console.log(`Area = ${(((A + B)*C)/2).toFixed(1)}`);
}
