import { curso, estudiantes } from "./datos.js";
import reporte from "./calculos.js";

// Spread de objeto para clonar y modificar el estudiante 0
const nuevo = { ...estudiantes[0], nombre: "Ana María" };

// Spread de arreglo para concatenar sin usar .concat()
const todos = [...estudiantes, nuevo];

console.log(`Curso: ${curso}`);

// Bucle moderno para mostrar en consola
todos.forEach(est => {
    console.log(reporte(est));
});

// Mostrar los resultados en la página web (tarea/index.html)
document.querySelector("#curso").textContent = `Curso: ${curso}`;
const lista = document.querySelector("#reportes");

todos.forEach(est => {
    lista.innerHTML += `<li>${reporte(est)}</li>`;
});