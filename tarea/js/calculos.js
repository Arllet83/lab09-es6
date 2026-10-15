// Arrow function con rest para calcular el promedio
export const promedio = (...notas) => 
  notas.reduce((suma, n) => suma + n, 0) / notas.length;

// Parámetro por defecto (minima = 13)
export const estado = (nota, minima = 13) => 
  nota >= minima ? "Aprobado" : "Desaprobado";

// Función reporte que usa desestructuración ({ nombre, notas }) y template literals
const reporte = ({ nombre, notas }) => {
  const prom = promedio(...notas); // Usando operador spread
  return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};

export default reporte;