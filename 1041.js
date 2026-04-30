let lines = ["0.1 0.0"];

let valores = lines[0].split(" ");
let x = Number(valores[0]);
let y = Number(valores[1]);

if (x > 0 && y > 0) {
    console.log("Q1");
}
if (x < 0 && y > 0) {
    console.log("Q2");
}
if (x < 0 && y < 0) {
    console.log("Q3");
}
if (x > 0 && y < 0) {
    console.log("Q4")
}
if (x === 0 && y !== 0) {
    console.log("Eixo Y")
}
if (y === 0 && x !== 0) {
    console.log("Eixo X");
}
if (x === 0 && y === 0) {
    console.log("Origem");
}