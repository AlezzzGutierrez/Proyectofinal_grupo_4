// Reglas y textos compartidos por los juegos
export const PUNTOS_POR_ACIERTO = 10; // 5 rondas x 10 = 50 por juego (coincide con Resultados)

export const mensajeFelicitacion = (nombre, puntajeTotal) => {
  if (puntajeTotal === 100) return `¡Perfecto, ${nombre}! Sos un experto de la granja 🏆`;
  if (puntajeTotal >= 70) return `¡Muy bien, ${nombre}! Conocés muy bien la granja 🐮`;
  if (puntajeTotal >= 40) return `¡Buen trabajo, ${nombre}! Podés mejorar jugando de nuevo 🐔`;
  return `¡Gracias por jugar, ${nombre}! La próxima te va a ir mejor 🐑`;
};