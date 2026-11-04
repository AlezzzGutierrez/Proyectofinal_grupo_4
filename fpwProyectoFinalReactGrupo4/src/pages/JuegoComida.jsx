import { useState } from "react";
import { Alert, Button, Container } from "react-bootstrap";
import { comidaRondas } from "../data/preguntasComida";
import { PUNTOS_POR_ACIERTO } from "../services/JuegoService";

export const JuegoComida = ({ onJuegoTerminado }) => {
  const [rondaActual, setRondaActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [respuesta, setRespuesta] = useState(null); // { elegida, acerto }

  const ronda = comidaRondas[rondaActual];
  const esUltima = rondaActual + 1 === comidaRondas.length;

  const elegirComida = (opcion) => {
    if (respuesta) return; // ya respondió esta ronda
    const acerto = opcion.texto === ronda.correcta;
    if (acerto) setPuntaje((prev) => prev + PUNTOS_POR_ACIERTO);
    setRespuesta({ elegida: opcion.texto, acerto });
  };

  const siguienteRonda = () => {
    if (esUltima) {
      onJuegoTerminado(puntaje);
    } else {
      setRondaActual((prev) => prev + 1);
      setRespuesta(null);
    }
  };

  // Color del botón: la correcta en verde, la equivocada en rojo
  const variante = (opcion) => {
    if (!respuesta) return "primary";
    if (opcion.texto === ronda.correcta) return "success";
    if (opcion.texto === respuesta.elegida) return "danger";
    return "outline-secondary";
  };

  const mensaje = respuesta?.acerto
    ? `¡Correcto! ¡${ronda.articulo} ${ronda.animal.toLowerCase()} comió! Ganaste ${PUNTOS_POR_ACIERTO} puntos.`
    : "¡Esa no es su comida! No ganaste puntos esta vez.";

  return (
    <Container className="text-center mt-4">
      <h2>Juego 1: ¡Hora de Comer!</h2>
      <p className="lead">Ronda {rondaActual + 1} de {comidaRondas.length}</p>
      <p><strong>Puntaje acumulado:</strong> {puntaje} puntos</p>

      <div className="alert alert-info fs-5">
        Dale a {ronda.articulo.toLowerCase()} {ronda.animal.toLowerCase()} su comida favorita.
      </div>

      <div className="display-1 my-3" role="img" aria-label={ronda.animal}>
        {ronda.emoji}
      </div>

      <div className="d-flex justify-content-center gap-3 my-4 flex-wrap">
        {ronda.opciones.map((opcion) => (
          <Button
            key={opcion.texto}
            variant={variante(opcion)}
            size="lg"
            disabled={!!respuesta}
            onClick={() => elegirComida(opcion)}
          >
            <span aria-hidden="true">{opcion.emoji}</span> {opcion.texto}
          </Button>
        ))}
      </div>

      {respuesta && (
        <Alert variant={respuesta.acerto ? "success" : "danger"} className="fs-5">
          {mensaje}
        </Alert>
      )}

      {respuesta && (
        <Button variant="primary" size="lg" onClick={siguienteRonda}>
          {esUltima ? "Continuar ➔" : "Siguiente Ronda ➔"}
        </Button>
      )}
    </Container>
  );
};

export default JuegoComida;
