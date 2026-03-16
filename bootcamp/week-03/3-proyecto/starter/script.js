// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define las constantes base de tu dominio
// Ejemplos con dominios no asignables:
//   Planetario:   TICKET_PRICE = 12_000, MAX_CAPACITY = 45
//   Acuario:      DAILY_FEEDING_KG = 150, ENTRY_PRICE = 35_000
//   Museo:        ADULT_TICKET = 20_000, GUIDED_TOUR = 15_000
//   Zoológico:    FOOD_COST_PER_DAY = 500_000, MAX_VISITORS = 800
//   Observatorio: SESSION_DURATION = 90, TICKET_PRICE = 18_000

// const EXAMPLE_CONSTANT = 0; // TODO: Reemplazar con tus constantes
const PRECIO_CURSO = 45000;          // precio de un curso completo
const LECCIONES_POR_NIVEL = 15;      // cuántas lecciones tiene cada nivel (A1, A2, etc.)
const CUPOS_MAX_POR_GRUPO = 20;      // máximo de estudiantes por grupo virtual
const DESCUENTO_POR_REFERIDO = 0.20; // 20% de descuento si traen amigo
const ESTUDIANTES_ACTIVOS = 120;     // cuántos estudiantes hay ahora
const IVA = 0.19;                    // impuesto en Colombia
// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// TODO: Calcula totales, subtotales o valores clave de tu dominio
// Usa: +, -, *, /, %, **
// Etiqueta cada resultado con console.log()

// Ejemplo con dominio Planetario (NO copiar):
// const ticketPrice = 12_000;
// const attendees = 38;
// const totalRevenue = ticketPrice * attendees;
// console.log("Ingresos función:", totalRevenue);
// const remainingSeats = 45 - attendees;
// console.log("Asientos disponibles:", remainingSeats);

const ingresosHoy = PRECIO_CURSO * 8;                  // vendiste 8 cursos hoy
console.log("Ingresos de hoy:", ingresosHoy);

const leccionesTotalesCompletadas = ESTUDIANTES_ACTIVOS * 5;  // cada estudiante completó 5 lecciones en promedio
console.log("Lecciones totales completadas:", leccionesTotalesCompletadas);

const promedioLeccionesPorEstudiante = leccionesTotalesCompletadas / ESTUDIANTES_ACTIVOS;
console.log("Promedio lecciones por estudiante:", promedioLeccionesPorEstudiante);

const cuposLibres = CUPOS_MAX_POR_GRUPO - 18;          // si hay 18 inscritos
console.log("Cupos libres en el grupo:", cuposLibres);

const precioConIVA = PRECIO_CURSO * (1 + IVA);
console.log("Precio curso con IVA:", precioConIVA);
// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// TODO: Usa +=, -=, *=, /= para actualizar valores acumulados
// Muestra el valor antes y después de cada operación

// Ejemplo (NO copiar):
// let runningTotal = 0;
// runningTotal += 25_000;
// console.log("Tras primer item:", runningTotal);
// runningTotal += 18_000;
// console.log("Tras segundo item:", runningTotal);
// runningTotal *= 0.90; // descuento del 10%
// console.log("Con descuento:", runningTotal);
let leccionesCompletadasHoy = 0;
leccionesCompletadasHoy += 45;   // 45 lecciones terminadas
leccionesCompletadasHoy += 30;
console.log("Lecciones completadas hoy:", leccionesCompletadasHoy);
// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// TODO: Valida condiciones usando === y operadores de orden
// NUNCA uses == (penalización en la rúbrica)

// Ejemplo (NO copiar):
// const daysLate = 5;
// const isOnTime = daysLate === 0;
// console.log("¿Entregado a tiempo?", isOnTime);
// const hasFine = daysLate > 0;
// console.log("¿Tiene multa?", hasFine);

const estudiantesEnGrupo = 19;
const grupoLleno = estudiantesEnGrupo === CUPOS_MAX_POR_GRUPO;
console.log("¿El grupo está lleno?", grupoLleno);

const puedeInscribirse = estudiantesEnGrupo < CUPOS_MAX_POR_GRUPO;
console.log("¿Puede inscribirse alguien más?", puedeInscribirse);

const nivelAvanzado = 92 >= 85;   // si sacó 92 en el test
console.log("¿Pasa a nivel avanzado?", nivelAvanzado);

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// TODO: Combina condiciones con &&, ||, !
// Al menos una condición con && y una con ||

// Ejemplo (NO copiar):
// const isMember = true;
// const purchaseAmount = 150_000;
// const qualifiesForDiscount = isMember && purchaseAmount >= 100_000;
// console.log("¿Descuento aplicable?", qualifiesForDiscount);

const terminoNivel = true;
const puntajeTest = 88;

const pasaANivelSuperior = terminoNivel && puntajeTest >= 80;
console.log("¿Pasa al siguiente nivel?", pasaANivelSuperior);

const recibePremio = puntajeTest >= 95 || terminoNivel && puntajeTest >= 90;
console.log("¿Recibe premio especial?", recibePremio);

const necesitaRepasar = !terminoNivel;
console.log("¿Necesita repasar el nivel?", necesitaRepasar);    

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

// TODO: Muestra un resumen con los valores más importantes
// calculados en las secciones anteriores

console.log("=== Resumen de la app de idiomas ===");
console.log("Precio curso:", PRECIO_CURSO);
console.log("Ingresos hoy:", ingresosHoy);
console.log("Cupos libres:", cuposLibres);
console.log("Promedio lecciones:", promedioLeccionesPorEstudiante);