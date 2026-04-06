// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: [[aplicacion para el aprendizaje de idiomas]
// ============================================
//
// INSTRUCCIONES:
// 1. Reemplaza todos los elementos genéricos
//    con datos reales de TU dominio asignado.
// 2. Completa cada sección marcada con TODO.
// 3. Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================
// Cada objeto representa un elemento de tu dominio.
// Adapta las propiedades según tu contexto.
//
// NOTA PARA EL APRENDIZ:
// Ejemplos de adaptación:
//   Biblioteca  → { name: "El Principito", category: "ficción", value: 96 }
//   Farmacia    → { name: "Ibuprofeno", category: "analgésico", value: 150 }
//   Gimnasio    → { name: "Bicicleta", category: "cardio", value: 6.5 }
//   Restaurante → { name: "Ensalada César", category: "entrada", value: 8.5 }

const items = [
  { name: "Lección Básica Inglés", category: "gramática", value: 30 },
  { name: "Vocabulario Comida", category: "vocabulario", value: 20 },
  { name: "Conversación Nivel 1", category: "conversación", value: 45 },
  { name: "Pronunciación Vocales", category: "pronunciación", value: 15 },
  { name: "Vocabulario Viajes", category: "vocabulario", value: 25 },
  { name: "Gramática Pasado", category: "gramática", value: 35 }
];
// Categorías
const categories = ["gramática", "vocabulario", "conversación", "pronunciación"];

// Tipo de valor
const valueLabel = "minutos";

// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("=== LISTADO COMPLETO ===");

// TODO: Usa for...of para imprimir cada elemento
// Formato sugerido: "1. [nombre] — [categoría] — [valueLabel]: [value]"
// Pista: usa una variable externa para el contador de número de línea
let lineNumber = 0;

for (const item of items) {
  lineNumber++;
  // TODO: Reemplaza este console.log con la información de tu dominio
  console.log(`${lineNumber}. ${item.name}`);
}

console.log("");

// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================
console.log("=== CONTEO POR CATEGORÍA ===");

// TODO: Para cada categoría, cuenta cuántos elementos tiene
// Pista: usa un for...of exterior (categorías) con un contador
//        y un for...of interior (items) para contar

for (const category of categories) {
  let count = 0;

  // TODO: Completa el bucle para contar items de esta categoría
  // for (const item of items) {
  //   if (item.category === category) count++;
  // }

  console.log(`${category}: ${count} elemento(s)`);
}

console.log("");

// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================
console.log("=== ESTADÍSTICAS ===");

console.log("\nESTADÍSTICAS");

let total = 0;

for (const item of items) {
  total += item.value;
}

let promedio = total / items.length;

console.log("Total: " + total);
console.log("Promedio: " + promedio);


// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================
console.log("=== MÁXIMO Y MÍNIMO ===");

console.log("\nMÁXIMO Y MÍNIMO");

let mayor = items[0];
let menor = items[0];

for (const item of items) {
  if (item.value > mayor.value) {
    mayor = item;
  }

  if (item.value < menor.value) {
    menor = item;
  }
}

console.log("Mayor: " + mayor.name + " (" + mayor.value + ")");
console.log("Menor: " + menor.name + " (" + menor.value + ")");

// ============================================
// SECCIÓN 6: Reporte numerado con for clásico
// ============================================

console.log("\nREPORTE");

// Usamos un for clásico porque necesitamos el índice (i)
for (let i = 0; i < items.length; i++) {

  // Guardamos el elemento actual
  let item = items[i];

  // Creamos una variable para guardar el resultado
  let estado = "";

  // Comparamos el valor del item con el promedio
  if (item.value >= promedio) {
    estado = "sobre el promedio";
  } else {
    estado = "bajo el promedio";
  }

  // Mostramos el resultado
  console.log((i + 1) + ". " + item.name + " está " + estado);
}