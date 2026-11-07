import { useJuego } from "../hooks/useJuego.js";
import Inicio from "../pages/Inicio.jsx";
import JuegoComida from "../pages/JuegoComida.jsx";
import JuegoIntruso from "../pages/JuegoIntruso.jsx";
import Resultados from "../pages/Resultados.jsx";

// Muestra la pantalla que corresponde según el estado del juego.
// Cada juego avisa con onJuegoTerminado(puntaje) cuando termina.
const Rutas = () => {
  const { pantalla, terminarComida, terminarIntruso } = useJuego();

  return (
    <>
      {pantalla === "inicio" && <Inicio />}
      {pantalla === "comida" && <JuegoComida onJuegoTerminado={terminarComida} />}
      {pantalla === "intruso" && <JuegoIntruso onJuegoTerminado={terminarIntruso} />}
      {pantalla === "resultados" && <Resultados />}
    </>
  );
};

export default Rutas;