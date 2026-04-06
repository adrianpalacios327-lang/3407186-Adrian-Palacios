// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// ============================================
// INSTRUCCIONES:
// 1. Reemplaza DOMAIN_NAME con el nombre de tu dominio asignado
// 2. Reemplaza VALUE_LABEL con la etiqueta de tu unidad de valor
//    Ejemplos: "unidades", "libros", "medicamentos", "miembros"
// 3. Define tu array items con objetos de tu dominio
// 4. Completa cada TODO con la implementación contextualizada
// ============================================

// ---- CONFIGURA TU DOMINIO ----
const DOMAIN_NAME = "Mi Inventario"; // TODO: Cambiar por tu dominio
const VALUE_LABEL = "elementos";     // TODO: Cambiar por unidad de tu dominio

// ============================================
// 1. ARRAY INICIAL — Define tu inventario
// ============================================

// TODO: Definir el array con mínimo 5 objetos de tu dominio.
// Cada objeto debe tener:
//   - id: número único
//   - name: nombre del elemento
//   - [propiedad numérica]: precio, cantidad, puntuación, etc.
//   - [propiedad booleana]: active, available, inStock, etc.
//   - [otras 2+ propiedades relevantes a tu dominio]
//
// Ejemplos por dominio:
// Biblioteca:  { id, name, author, year, available: true }
// Farmacia:    { id, name, price, stock, requiresPrescription: false }
// Gimnasio:    { id, name, memberSince, plan, active: true }
// Restaurante: { id, name, price, category, available: true }

const items = [
  { id: 1, name: "Inglés Básico", category: "gramática", value: 30, active: true, level: "A1" },
  { id: 2, name: "Vocabulario Comida", category: "vocabulario", value: 20, active: true, level: "A1" },
  { id: 3, name: "Conversación", category: "conversación", value: 45, active: false, level: "A2" },
  { id: 4, name: "Pronunciación", category: "pronunciación", value: 15, active: true, level: "A1" },
  { id: 5, name: "Vocabulario Viajes", category: "vocabulario", value: 25, active: true, level: "A2" }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

// Agregar elemento
const addItem = (newItem) => {
  items.push(newItem);
  console.log("Agregado: " + newItem.name);
};

// Eliminar último
const removeLastItem = () => {
  const eliminado = items.pop();
  console.log("Eliminado: " + eliminado.name);
  return eliminado;
};

// Agregar al inicio
const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log("Prioritario: " + priorityItem.name);
};

// Eliminar por índice
const removeByIndex = (index) => {
  const eliminado = items.splice(index, 1);
  console.log("Eliminado: " + eliminado[0].name);
};

// Filtrar activos
const getActiveItems = () => {
  return items.filter(item => item.active === true);
};

// Buscar por nombre
const findByName = (name) => {
  return items.find(item => item.name === name);
};

// Formatear
const formatItem = (item) => {
  return `[${item.id}] ${item.name} - ${item.category} - ${item.value} min`;
};
// ============================================
// 3. REPORTE
// ============================================

console.log("\n===== INVENTARIO =====\n");

// Mostrar inicial
console.log("Lista inicial:");
items.forEach(item => {
  console.log(formatItem(item));
});

// Operaciones
console.log("\n--- Cambios ---\n");

addItem({ id: 6, name: "Listening", category: "escucha", value: 35, active: true, level: "A2" });

addPriorityItem({ id: 0, name: "Introducción", category: "básico", value: 10, active: true, level: "A1" });

removeByIndex(2);

removeLastItem();

// Mostrar actualizado
console.log("\nLista actualizada:");
items.forEach(item => {
  console.log(formatItem(item));
});

// Búsqueda
console.log("\nBúsqueda:");
const encontrado = findByName("Pronunciación");
console.log(encontrado);

// Activos
const activos = getActiveItems();
console.log("Activos:", activos.length);

// Map
console.log("\nNombres:");
const nombres = items.map(item => item.name);
console.log(nombres);

console.log("\nValores con +10:");
const nuevosValores = items.map(item => item.value + 10);
console.log(nuevosValores);

// Resumen
console.log("\nResumen:");
console.log("Total:", items.length);
console.log("Activos:", activos.length);
console.log("Inactivos:", items.length - activos.length);
