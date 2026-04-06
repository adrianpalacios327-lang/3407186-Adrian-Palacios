// ============================================
// PROYECTO INTEGRADOR — ETAPA 0
// Semana 10 — JavaScript ES2023 Bootcamp
// ============================================
//
// INSTRUCCIONES:
// 1. Reemplaza DOMAIN_NAME y los datos de ejemplo con tu dominio asignado
// 2. Implementa cada TODO siguiendo las instrucciones de los comentarios
// 3. Ejecuta con: node 3-proyecto/starter/app.js
// 4. Valida el checklist del README antes de entregar
//
// DOMINIO ASIGNADO: [completar con tu dominio]
// ============================================

// ============================================
// SECCIÓN 1: Configuración y Constantes (Semanas 01–02)
"use strict";

// ============================================
// 1. CONFIGURACIÓN
// ============================================

const DOMAIN_NAME = "APP_IDIOMAS";
const VALUE_LABEL = "lecciones";
const MAX_ITEMS = 1_000;

// ============================================
// 2. DATOS
// ============================================

const items = [
  { id: 1, name: "Inglés Básico", value: 30, active: true, category: "gramática", level: "A1" },
  { id: 2, name: "Vocabulario", value: 20, active: true, category: "vocabulario" },
  { id: 3, name: "Conversación", value: 45, active: false, category: "conversación", level: "A2" },
  { id: 4, name: "Pronunciación", value: 15, active: true, category: "pronunciación" },
  { id: 5, name: "Listening", value: 35, active: true, category: "escucha", level: "A2" },
  { id: 6, name: "Reading", value: 25, active: false, category: "lectura" }
];

// ============================================
// 3. CRUD
// ============================================

const addItem = (item) => {
  if (items.length >= MAX_ITEMS) {
    console.log("No se pueden agregar más elementos");
    return;
  }
  items.push(item);
  console.log(`Agregado: ${item.name}`);
};

const findById = (id) => {
  return items.find(item => item.id === id);
};

const getActive = () => {
  return items.filter(item => item.active);
};

const filterByField = (field, value) => {
  return items.filter(item => item[field] === value);
};

// ============================================
// 4. ANÁLISIS
// ============================================

const updateItem = (id, changes) => {
  return items.map(item =>
    item.id === id ? { ...item, ...changes } : item
  );
};

const calculateStats = (field) => {
  const values = items.map(i => i[field]);

  let total = 0;
  values.forEach(v => total += v);

  return {
    min: Math.min(...values),
    max: Math.max(...values),
    avg: total / values.length,
    total: total
  };
};

// ============================================
// 5. DISPLAY
// ============================================

const formatItem = (item) => {
  return `[${item.id}] ${item.name.padEnd(15)} | ${item.category} | ${item.value} min | ${item.level ?? "N/A"}`;
};

const buildReport = () => {
  console.log(`\nREPORTE - ${DOMAIN_NAME}`);
  console.log("=".repeat(40));

  // Lista
  items.forEach(item => console.log(formatItem(item)));

  // Activos
  const activos = getActive();
  console.log(`\nActivos: ${activos.length} | Inactivos: ${items.length - activos.length}`);

  // Estadísticas
  const stats = calculateStats("value");
  console.log(`Min: ${stats.min} Max: ${stats.max} Promedio: ${stats.avg.toFixed(1)}`);

  // Propiedades del primero
  console.log("\nPropiedades del primero:");
  Object.entries(items[0]).forEach(([k, v]) => {
    console.log(k + ": " + v);
  });

  console.log("\nTotal:", items.length);
};

// ============================================
// 6. EJECUCIÓN
// ============================================

console.log("=".repeat(40));
console.log(DOMAIN_NAME);
console.log("=".repeat(40));

// Buscar
console.log(findById(1));

// Activos
console.log(getActive());

// Filtrar
console.log(filterByField("category", "vocabulario"));

// Update
console.log(updateItem(1, { value: 50 }));

// Stats
console.log(calculateStats("value"));

// Reporte
buildReport();

// Agregar
addItem({ id: 7, name: "Writing", value: 40, active: true, category: "escritura" });
// Paso 1: Buscar por id
// const found = findById(1);
// console.log("Encontrado id=1:", found?.name ?? "no encontrado");
// console.log("");

// Paso 2: Listar activos
// const active = getActive();
// console.log(`Activos: ${active.length}`);
// active.forEach(item => console.log(" ", formatItem(item)));
// console.log("");

// Paso 3: Filtrar por campo
// const filtered = filterByField("category", "tipo-a");
// console.log(`Filtro category=tipo-a: ${filtered.length} resultados`);
// console.log("");

// Paso 4: Actualizar con spread
// const updated = updateItem(1, { value: 999 });
// console.log(`Actualizado id=1: value=${updated.find(i => i.id === 1)?.value}`);
// console.log("");

// Paso 5: Estadísticas
// const stats = calculateStats("value");
// console.log(`Estadísticas (value): min=${stats.min} max=${stats.max} avg=${stats.avg.toFixed(2)}`);
// console.log("");

// Paso 6: Reporte completo
// buildReport();

// TODO: Agregar un nuevo elemento usando addItem
// addItem({ id: 7, name: "Nuevo elemento", value: 300, active: true, category: "tipo-a" });
