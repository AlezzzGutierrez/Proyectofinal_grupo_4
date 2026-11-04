import { useContext } from "react";
import { JuegoContext } from "../contexts/JuegoContext.jsx";

// Atajo para leer el estado del juego desde cualquier pantalla
export function useJuego() {
  const contexto = useContext(JuegoContext);
  if (!contexto) {
    throw new Error("useJuego debe usarse dentro de <JuegoProvider>");
  }
  return contexto;
}
