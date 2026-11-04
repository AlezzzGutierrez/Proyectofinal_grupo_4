// Juego 1: ¡Hora de Comer! Cada ronda tiene un animal, 3 comidas y la correcta.
export const comidaRondas = [
  {
    id: 1, animal: "Vaca", articulo: "La", emoji: "🐄",
    opciones: [
      { texto: "Pasto", emoji: "🌿" },
      { texto: "Carne", emoji: "🥩" },
      { texto: "Banana", emoji: "🍌" },
    ],
    correcta: "Pasto",
  },
  {
    id: 2, animal: "Gallina", articulo: "La", emoji: "🐔",
    opciones: [
      { texto: "Maíz", emoji: "🌽" },
      { texto: "Pasto", emoji: "🌿" },
      { texto: "Pescado", emoji: "🐟" },
    ],
    correcta: "Maíz",
  },
  {
    id: 3, animal: "Chancho", articulo: "El", emoji: "🐷",
    opciones: [
      { texto: "Todo lo que encuentra", emoji: "🍽️" },
      { texto: "Solo Pasto", emoji: "🌿" },
      { texto: "Solo Carne", emoji: "🥩" },
    ],
    correcta: "Todo lo que encuentra",
  },
  {
    id: 4, animal: "Oveja", articulo: "La", emoji: "🐑",
    opciones: [
      { texto: "Pasto", emoji: "🌿" },
      { texto: "Hamburguesa", emoji: "🍔" },
      { texto: "Pizza", emoji: "🍕" },
    ],
    correcta: "Pasto",
  },
  {
    id: 5, animal: "Caballo", articulo: "El", emoji: "🐴",
    opciones: [
      { texto: "Pasto y Zanahoria", emoji: "🥕" },
      { texto: "Pollo", emoji: "🍗" },
      { texto: "Helado", emoji: "🍦" },
    ],
    correcta: "Pasto y Zanahoria",
  },
];
