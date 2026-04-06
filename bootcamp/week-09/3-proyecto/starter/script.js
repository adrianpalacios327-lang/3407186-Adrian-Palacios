"use strict";

// ============================================
// CONFIGURACIÓN
// ============================================

const DOMAIN_NAME = "App de Idiomas";
const VALUE_LABEL = "lecciones";

// ============================================
// DATOS
// ============================================

const items = [
  { id: 1, name: "Inglés Básico", duration: 30, active: true, level: "A1" },
  { id: 2, name: "Vocabulario Comida", duration: 20, active: true },
  { id: 3, name: "Conversación", duration: 45, active: false, level: "A2" },
  { id: 4, name: "Pronunciación", duration: 15, active: true },
  { id: 5, name: "Vocabulario Viajes", duration: 25, active: true, level: "A2" },
  { id: 6, name: "Listening", duration: 35, active: false }
];

// ============================================
// INSPECCIÓN
// ============================================

const inspectItem = (item) => {
  console.log("\nDetalle de: " + item.name);

  Object.entries(item).forEach(([key, value]) => {
    console.log(key.padEnd(15) + ": " + value);
  });
};

const calculateStats = (key) => {
  const values = items.map(item => item[key]);

  let total = 0;
  let max = values[0];
  let min = values[0];

  values.forEach(v => {
    total += v;
    if (v > max) max = v;
    if (v < min) min = v;
  });

  const promedio = total / values.length;

  console.log("\nEstadísticas:");
  console.log("Total:", total);
  console.log("Promedio:", promedio);
  console.log("Máximo:", max);
  console.log("Mínimo:", min);
};

// ============================================
// OPCIONALES
// ============================================

const showWithOptionals = (item) => {
  console.log("\n→ " + item.name);
  console.log("Duración:", item.duration);

  if (Object.hasOwn(item, "level")) {
    console.log("Nivel:", item.level);
  }
};

// ============================================
// for...in
// ============================================

const printAllProperties = (item) => {
  console.log("\nPropiedades:");

  for (let key in item) {
    if (Object.hasOwn(item, key)) {
      console.log(key + ": " + item[key]);
    }
  }
};

// ============================================
// SPREAD
// ============================================

const updateItem = (item, changes) => {
  return { ...item, ...changes };
};

// ============================================
// OPERACIONES
// ============================================

const getAvailable = () => {
  return items.filter(item => item.active);
};

const findById = (id) => {
  return items.find(item => item.id === id);
};

const addCalculatedProp = () => {
  return items.map(item => ({
    ...item,
    durationHours: item.duration / 60
  }));
};

const sortByNumericProp = (asc = true) => {
  return [...items].sort((a, b) => asc ? a.duration - b.duration : b.duration - a.duration);
};

// ============================================
// REPORTE
// ============================================

const buildReport = () => {
  console.log("\nCATÁLOGO:", DOMAIN_NAME);

  console.log("Total:", items.length);

  const activos = getAvailable().length;
  console.log("Activos:", activos);

  const ordenados = sortByNumericProp();

  console.log("\nOrdenados:");
  ordenados.forEach(item => {
    console.log(item.name + " - " + item.duration);
  });
};

// ============================================
// EJECUCIÓN
// ============================================

console.log("\nInicio:", DOMAIN_NAME);

inspectItem(items[0]);

calculateStats("duration");

items.forEach(showWithOptionals);

printAllProperties(items[0]);

console.log("\nUpdate:");
console.log(updateItem(items[0], { duration: 50 }));

console.log("\nActivos:");
console.log(getAvailable());

console.log("\nBuscar ID 2:");
console.log(findById(2));

console.log("\nBuscar ID 99:");
console.log(findById(99));

console.log("\nCon cálculo:");
console.log(addCalculatedProp());

console.log("\nOrdenados:");
console.log(sortByNumericProp());

buildReport();