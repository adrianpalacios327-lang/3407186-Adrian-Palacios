// ============================================
// PROYECTO SEMANA 05: Clasificador
// Condicionales — if/else, ternario, switch, ??, ?.
// ============================================
//
// NOTA PARA EL APRENDIZ:
// Adapta este script a tu dominio asignado.
// Reemplaza los comentarios TODO con tu propia implementación.
// Usa los conceptos aprendidos esta semana.
//
// Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

// TODO: Define al menos 5 variables con datos de un elemento de tu dominio.
// Ejemplos orientativos:
// - Un libro, medicamento, miembro, estudiante, producto, etc.
// - Incluye: nombre, estado, valor numérico, tipo (string), y alguna propiedad opcional

    const elementName = "Saludos Básicos en Inglés";          // nombre de la lección
const elementStatus = "active";                           // "active", "inactive", "draft", etc.
const elementValue = 78;                                  // puntaje promedio de los estudiantes que la hicieron (0-100)
const elementType = "vocabulario";                        // o "gramática", "pronunciación", "conversación"
const elementInfo = {                                     // objeto opcional (puede ser null si no lo quieres usar)
  difficulty: "fácil",
  wordsCount: 25,
  level: "A1"
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

// TODO: Clasifica el elemento en al menos 3 niveles según elementValue.
// Ejemplo de estructura:
// let classification;
// if (elementValue >= ...) {
//   classification = "...";
// } else if (elementValue >= ...) {
//   classification = "...";
// } else {
//   classification = "...";
// }

let classification = "Sin clasificar"; // TODO: implementar if/else if/else
let tuNumero = 100
if (tuNumero >= 90) {
  classification = "Excelente";
} else if (tuNumero >= 75) {
  classification = "Buena";
} else if (tuNumero >= 60) {
  classification = "Regular";
} else {
  classification = "Baja / Revisar";
}

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

// TODO: Usa el ternario para determinar un estado de dos opciones.
// Ejemplo: const statusLabel = elementStatus === "active" ? "Activo" : "Inactivo";

const statusLabel = elementStatus==="activo" // TODO: implementar con ternario 
  ? "Lección disponible" 
  : "Lección no disponible";
// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

// TODO: Usa switch sobre elementType para asignar una etiqueta.
// Ejemplo:
// switch (elementType) {
//   case "typeA": typeLabel = "..."; break;
//   case "typeB": typeLabel = "..."; break;
//   default: typeLabel = "Tipo desconocido";
// }

let typeLabel = "Tipo desconocido"; // TODO: implementar con switch

switch (elementType) {
  case "vocabulario":
    typeLabel = "Aprendizaje de palabras y expresiones";
    break;
  case "gramática":
    typeLabel = "Reglas del idioma";
    break;
  case "listening":
    typeLabel = "Comprensión auditiva";
    break;
  default:
    typeLabel = "Categoría no definida";
}
// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

// TODO: Usa ?? para obtener un valor de fallback cuando sea null o undefined.
// Ejemplo: const displayName = elementName ?? "Sin nombre";

const displayName = elementName ?? "Lección UNO";

const infoDetail = elementInfo?.difficulty ?? "Dificultad no especificada";
// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

// TODO: Accede de forma segura a una propiedad de elementInfo.
// Ejemplo: const location = elementInfo?.location ?? "Ubicación no especificada";

const safeProperty = ""; // TODO: elementInfo?.tuPropiedad ?? "valor por defecto"

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

// TODO: Muestra la ficha en consola con template literals (sin concatenación +)
// Incluye todos los resultados de las secciones anteriores

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));
console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación por puntaje: ${classification}`);
console.log(`Tipo de lección: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Palabras aproximadas: ${safeProperty}`);
console.log("=".repeat(40));
