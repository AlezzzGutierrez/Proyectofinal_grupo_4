import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { intrusoRondas } from "../data/preguntasIntruso";
import { PUNTOS_POR_ACIERTO } from "../services/JuegoService";
import { useNavigate } from "react-router-dom";
import { useJuego } from "../hooks/useJuego.js";
import "../styles/JuegoIntruso.css";

export const JuegoIntruso = () => {
  const navigate = useNavigate();
  const { terminarIntruso } = useJuego();

  const [rondaActual, setRondaActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [respuesta, setRespuesta] = useState(null); // { elegida, acerto }

  const ronda = intrusoRondas[rondaActual];
  const esUltima = rondaActual + 1 === intrusoRondas.length;
  const progresoPorcentaje = ((rondaActual + 1) / intrusoRondas.length) * 100;

  const seleccionarAnimal = (animal) => {
    if (respuesta) return;
    const acerto = animal.esIntruso;
    if (acerto) setPuntaje((prev) => prev + PUNTOS_POR_ACIERTO);
    setRespuesta({ elegida: animal.nombre, acerto });
  };

  const siguienteRonda = () => {
    if (esUltima) {
      terminarIntruso(puntaje);
      navigate("/resultados");
    } else {
      setRondaActual((prev) => prev + 1);
      setRespuesta(null);
    }
  };

  const claseEstadoBoton = (animal) => {
    if (!respuesta) return "";
    if (animal.esIntruso) return "opcion-correcta";
    if (animal.nombre === respuesta.elegida) return "opcion-incorrecta";
    return "opcion-deshabilitada";
  };

  return (
    <div className="juego-intruso-wrapper">
      <Container className="d-flex justify-content-center align-items-center py-4">
        <div className="juego-card">
          {/* Título del juego */}
          <h2 className="juego-titulo">Juego 2: El Intruso de la Granja</h2>

          {/* Barra superior estilo juego 1 */}
          <div className="barra-superior">
            <div className="progreso-contenedor">
              <div className="avatar-ronda" aria-hidden="true">
                🔍
              </div>
              <div className="progreso-track">
                <div
                  className="progreso-fill"
                  style={{ width: `${progresoPorcentaje}%` }}
                />
              </div>
              <span className="texto-ronda">
                {rondaActual + 1}/{intrusoRondas.length}
              </span>
            </div>

            <div className="badge-puntaje">
              ⭐ {puntaje} pts
            </div>
          </div>

          {/* Consigna en recuadro rectangular ovalado amarillo #FFFAB5 */}
          <div className="consigna-pill">
            ¡Un animal se metió a la granja, pero no pertenece ahí! Sacá al INTRUSO.
          </div>

          {/* Bandeja con los animales: ícono redondo arriba y botón abajo */}
          <div className="bandeja-opciones my-3">
            {ronda.animal.map((animal) => (
              <div key={animal.nombre} className="columna-animal">
                {/* Ícono redondo con la imagen del animal */}
                <div
                  className={`icono-redondo-animal ${claseEstadoBoton(animal)}`}
                  onClick={() => seleccionarAnimal(animal)}
                >
                  {animal.imagen ? (
                    <img
                      src={animal.imagen}
                      alt={animal.nombre}
                      className="animal-icono-img"
                    />
                  ) : (
                    <span className="animal-icono-emoji">{animal.emoji || "🐾"}</span>
                  )}
                </div>

                {/* Botón con el nombre del animal */}
                <button
                  type="button"
                  disabled={!!respuesta}
                  onClick={() => seleccionarAnimal(animal)}
                  className={`boton-ficha-animal text-capitalize ${claseEstadoBoton(animal)}`}
                >
                  {animal.nombre}
                </button>
              </div>
            ))}
          </div>

          {/* Mensaje de resultado */}
          {respuesta && (
            <div
              className={`feedback-pill mt-2 ${
                respuesta.acerto ? "feedback-ok" : "feedback-error"
              }`}
            >
              {respuesta.acerto ? ronda.avisoExito : ronda.avisoFallo}
            </div>
          )}

          {/* Botón siguiente */}
          {respuesta && (
            <div className="mt-3">
              <Button className="boton-siguiente" onClick={siguienteRonda}>
                {esUltima ? "Ver Resultados 🏆" : "Siguiente Ronda ➔"}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default JuegoIntruso;