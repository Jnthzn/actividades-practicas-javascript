let notas = [5, 7, 8, 6, 4];
let total = 0;

for (let i = 0; i < notas.length; i++) {
  total += notas[i];
}

let promedio = total / notas.length;

console.log(`El promedio de las notas es: ${promedio}`);

console.log(`El alumno ${promedio >= 6 ? "Aprobó" : "Desaprobó"}`);
