import { createContext, useState } from "react";

// Guarda en un solo lugar: la pantalla actual, el nombre y los puntajes.
// eslint-disable-next-line react-refresh/only-export-components
export const JuegoContext = createContext(null);

export const JuegoProvider = ({ children }) => {
  const [pantalla, setPantalla] = useState("inicio"); // inicio | comida | intruso | resultados
  const [nombre, setNombre] = useState("");
  const [puntajeComida, setPuntajeComida] = useState(0);
  const [puntajeIntruso, setPuntajeIntruso] = useState(0);

  // Pantalla 1 (Login) -> Pantalla 2 (Juego 1)
  const comenzar = (nombreIngresado) => {
    setNombre(nombreIngresado.trim());
    setPuntajeComida(0);
    setPuntajeIntruso(0);
    setPantalla("comida");
  };

  // Pantalla 2 -> Pantalla 3 (Juego 2): guarda el puntaje del juego 1
  const terminarComida = (puntos) => {
    setPuntajeComida(puntos);
    setPantalla("intruso");
  };

  // Pantalla 3 -> Pantalla 4 (Resultados): guarda el puntaje del juego 2
  const terminarIntruso = (puntos) => {
    setPuntajeIntruso(puntos);
    setPantalla("resultados");
  };

  // Pantalla 4 -> Pantalla 1: "Jugar de nuevo"
  const reiniciar = () => {
    setNombre("");
    setPuntajeComida(0);
    setPuntajeIntruso(0);
    setPantalla("inicio");
  };

  const valor = {
    pantalla,
    nombre,
    puntajeComida,
    puntajeIntruso,
    puntajeTotal: puntajeComida + puntajeIntruso,
    comenzar,
    terminarComida,
    terminarIntruso,
    reiniciar,
  };

  return <JuegoContext.Provider value={valor}>{children}</JuegoContext.Provider>;
};