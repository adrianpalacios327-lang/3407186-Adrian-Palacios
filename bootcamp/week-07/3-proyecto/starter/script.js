// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: [Tu dominio asignado]
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta este proyecto a tu dominio asignado.
// Todos los nombres genéricos (item, value, category, etc.)
// deben reemplazarse con nombres específicos de tu dominio.
//
// Ejemplos de adaptación:
// - Biblioteca: book, author, available, fine
// - Farmacia: medicine, price, stock, laboratory
// - Gimnasio: member, plan, active, bmi
// - Restaurante: dish, price, available, category
// - Banco: account, balance, interest, active
// - Hospital: patient, age, hasAppointment, doctor

"use strict"; // activa el modo estricto — mejores errores

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

// Nombre del proyecto
const DOMAIN_NAME = "App de Idiomas";

// Qué representa el valor
const VALUE_LABEL = "minutos";

// Lista de lecciones
const items = [
  { id: 1, name: "Inglés Básico", category: "gramática", value: 30, active: true },
  { id: 2, name: "Vocabulario Comida", category: "vocabulario", value: 20, active: true },
  { id: 3, name: "Conversación", category: "conversación", value: 45, active: false },
  { id: 4, name: "Pronunciación", category: "pronunciación", value: 15, active: true },
  { id: 5, name: "Vocabulario Viajes", category: "vocabulario", value: 25, active: true }
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

// TODO: Implementa una arrow function que reciba un elemento
// y devuelva un string formateado para mostrar en pantalla.
// Debe usar template literals y al menos 2 propiedades del elemento.
//
// Ejemplo (Biblioteca):
// const formatItem = (book) =>
//   `📚 ${book.name} [${book.category}] — $${book.value}`;
//
// Ejemplo (Farmacia):
// const formatItem = (medicine) =>
//   `💊 ${medicine.name} — Stock: ${medicine.stock} — $${medicine.price}`;

// Esta función muestra la información de una lección
const formatItem = (item) => {
  return item.name + " - " + item.category + " - " + item.value + " " + VALUE_LABEL;
};
// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// TODO: Implementa una función pura que calcule algún valor relevante
// del dominio a partir de parámetros numéricos.
// Debe ser una función pura: mismo input → siempre mismo output.
//
// Ejemplo (Biblioteca): calcular multa por días de retraso
// const calculateValue = (baseValue, factor) => baseValue * factor;
//
// Ejemplo (Farmacia): calcular total de compra con descuento
// const calculateValue = (price, quantity, discountPct = 0) =>
//   +(price * quantity * (1 - discountPct / 100)).toFixed(2);

// Esta función devuelve el valor (minutos)
const calculateValue = (value) => {
  return value;
};
// ============================================
// SECCIÓN 4: Función de validación
// ============================================

// TODO: Implementa una función que reciba un elemento y devuelva
// true o false según una regla del dominio.
//
// Ejemplo (Biblioteca): verificar si el libro está disponible
// const isValid = (book) => book.available === true;
//
// Ejemplo (Farmacia): verificar si hay suficiente stock
// const isValid = (medicine) => medicine.stock > 0;
//
// Ejemplo (Gimnasio): verificar si el miembro está activo
// const isValid = (member) => member.active === true;

// Esta función verifica si la lección está activa
const isValid = (item) => {
  return item.active === true;
};
// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

// TODO: Implementa una función que use al menos un parámetro
// por defecto significativo para tu dominio.
//
// Ejemplo (Biblioteca): crear un registro con valores por defecto
// const createRecord = (name, category = "general", available = true) =>
//   ({ name, category, available });
//
// Ejemplo (Farmacia): formatear precio con moneda por defecto
// const formatPrice = (price, currency = "USD", showTax = false) =>
//   showTax ? `${currency} ${(price * 1.19).toFixed(2)}` : `${currency} ${price.toFixed(2)}`;

// Esta función muestra un valor con su etiqueta
const formatWithDefault = (value, label = VALUE_LABEL) => {
  return label + ": " + value;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

// TODO: Genera un reporte completo usando las funciones anteriores.
// Debe:
// 1. Mostrar el título del dominio
// 2. Recorrer items con for...of y mostrar cada uno con formatItem()
// 3. Contar los elementos válidos con isValid()
// 4. Calcular el total o promedio con calculateValue()
// 5. Mostrar el resumen final con formatWithDefault()


// Validar si hay datos
if (items.length === 0) {
  console.log("No hay datos");
} else {

  // Mostrar lista
  console.log("\nLISTADO:");
  let contador = 1;

  for (const item of items) {
    console.log(contador + ". " + formatItem(item));
    contador++;
  }

  // Contar activos
  let validos = 0;

  for (const item of items) {
    if (isValid(item)) {
      validos++;
    }
  }

  console.log("\nActivos: " + validos + " de " + items.length);

  // Sumar valores
  let total = 0;

  for (const item of items) {
    total += calculateValue(item.value);
  }

  console.log(formatWithDefault(total, "Total " + VALUE_LABEL));
}

console.log(`\n${"═".repeat(45)}\n`);
