let nombre = "Jonathan";
let notas = [6, 6, 6, 5, 10];

let total = 0;

for (let i = 0; i < notas.length; i++) {
  total += notas[i];
}

let promedio = total / notas.length;

let resultado;

if (promedio >= 7) {
  resultado = "Muy bueno";
} else if (promedio >= 6) {
  resultado = "Aprobado";
} else {
  resultado = "Desaprobado";
}

console.log(`Estudiante: ${nombre}`);
console.log(`Promedio: ${promedio.toFixed(1)}`);
console.log(`Resultado: ${resultado}`);
