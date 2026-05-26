const persona = {
  nombre: "Jonathan",
  apellido: "Sanchez",
  nota: 0.5,
};

console.log(
  `Estudiante: ${persona.nombre} ${persona.apellido}, nota: ${persona.nota} - ${persona.nota >= 6 ? "Aprobado" : "Desaprobado"}`,
);
