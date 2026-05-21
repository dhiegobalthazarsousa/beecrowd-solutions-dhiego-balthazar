let lines = ["6.0 6.0 6.0"];

let valores = lines[0].split(" ").map(valor => Number(valor));

valores.sort((a, b) => b - a);

let A = valores[0];
let B = valores[1];
let C = valores[2];

if (A >= B + C) {
    console.log("NAO FORMA TRIANGULO");
} else {
    if (Math.pow(A, 2) === Math.pow(B, 2) + Math.pow(C, 2)) {
        console.log("TRIANGULO RETANGULO");
    }

    if (Math.pow(A, 2) > Math.pow(B, 2) + Math.pow(C, 2)) {
        console.log("TRIANGULO OBTUSANGULO");
    }

    if (Math.pow(A, 2) < Math.pow(B, 2) + Math.pow(C, 2)) {
        console.log("TRIANGULO ACUTANGULO");
    }

    if (A === B && A === C) {
        console.log("TRIANGULO EQUILATERO");
    }

    if ((A === B && A !== C && B!== C) || (A === C && A !== B && C !== B) || (B === C && B !== A && C !== A)) {
        console.log("TRIANGULO ISOSCELES");
    }
}