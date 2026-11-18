import { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { comidaRondas } from "../data/preguntasComida";
import { PUNTOS_POR_ACIERTO } from "../services/JuegoService";
import { useNavigate } from "react-router-dom";
import { useJuego } from "../hooks/useJuego.js";
import imagenService from "../services/imagenService";
import audioService from "../services/audioService";
import "../styles/JuegoComida.css";

export const JuegoComida = () => {
  const navigate = useNavigate();
  const { terminarComida } = useJuego();

  const [rondaActual, setRondaActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [respuesta, setRespuesta] = useState(null);
  const [imagenActual, setImagenActual] = useState(null);

  const ronda = comidaRondas[rondaActual];
  const esUltima = rondaActual + 1 === comidaRondas.length;
  const progresoPorcentaje = ((rondaActual + 1) / comidaRondas.length) * 100;

  const cargarImagenRonda = async () => {
    if (ronda.imagen) {
      const nombreArchivo = ronda.imagen.replace("/img/", "");
      const urlImagen = await imagenService.obtenerImagen(nombreArchivo);
      if (urlImagen) {
        setImagenActual(urlImagen);
      }
    }
  };

  useEffect(() => {
    cargarImagenRonda();
  }, [rondaActual]);

  const elegirComida = (opcion) => {
    if (respuesta) return;
    const acerto = opcion.texto === ronda.correcta;

    if (acerto) {
      setPuntaje((prev) => prev + PUNTOS_POR_ACIERTO);
      audioService.reproducirAcierto();
    } else {
      audioService.reproducirError();
    }

    setRespuesta({ elegida: opcion.texto, acerto });
  };

  const siguienteRonda = () => {
    if (esUltima) {
      terminarComida(puntaje);
      navigate("/intruso");
    } else {
      setRondaActual((prev) => prev + 1);
      setRespuesta(null);
    }
  };

  const claseEstadoBoton = (opcion) => {
    if (!respuesta) return "";
    if (opcion.texto === ronda.correcta) return "opcion-correcta";
    if (opcion.texto === respuesta.elegida) return "opcion-incorrecta";
    return "opcion-deshabilitada";
  };

  const mensaje = respuesta?.acerto
    ? `¡Correcto! ¡${ronda.articulo} ${ronda.animal.toLowerCase()} comió! +${PUNTOS_POR_ACIERTO} pts`
    : "¡Esa no es su comida! Probemos con la siguiente.";

  return (
    <div className="juego-comida-wrapper">
      <Container fluid className="d-flex justify-content-center align-items-center py-4">
        <div className="juego-card">
          <h2 className="juego-titulo">Juego 1: ¡Hora de Comer!</h2>

          <div className="barra-superior">
            <div className="progreso-contenedor">
              <div className="avatar-ronda">
                {imagenActual && (
                  <img
                    src={imagenActual}
                    alt={ronda.animal}
                    className="avatar-ronda-img"
                  />
                )}
              </div>
              <div className="progreso-track">
                <div
                  className="progreso-fill"
                  style={{ width: `${progresoPorcentaje}%` }}
                />
              </div>
              <span className="texto-ronda">
                {rondaActual + 1}/{comidaRondas.length}
              </span>
            </div>

            <div className="badge-puntaje">
              ⭐ {puntaje} pts
            </div>
          </div>

          <div className="consigna-pill">
            Dale a {ronda.articulo.toLowerCase()} {ronda.animal.toLowerCase()} su comida favorita.
          </div>

          <div className="animal-protagonista-zona">
            <div className="animal-circulo-fondo">
              {imagenActual && (
                <img
                  src={imagenActual}
                  alt={ronda.animal}
                  className={`animal-img ${respuesta?.acerto ? "animal-feliz" : ""}`}
                />
              )}
            </div>
          </div>

          {respuesta && (
            <div
              className={`feedback-pill ${respuesta.acerto ? "feedback-ok" : "feedback-error"
                }`}
            >
              {mensaje}
            </div>
          )}

          <div className="bandeja-opciones">
            {ronda.opciones.map((opcion) => (
              <button
                key={opcion.texto}
                type="button"
                disabled={!!respuesta}
                onClick={() => elegirComida(opcion)}
                className={`boton-ficha-comida ${claseEstadoBoton(opcion)}`}
              >
                <span className="ficha-emoji" aria-hidden="true">
                  {opcion.emoji}
                </span>
                <span className="ficha-texto">{opcion.texto}</span>
              </button>
            ))}
          </div>

          {respuesta && (
            <div className="mt-4">
              <Button className="boton-siguiente" onClick={siguienteRonda}>
                {esUltima ? "Continuar ➔" : "Siguiente Ronda ➔"}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default JuegoComida;