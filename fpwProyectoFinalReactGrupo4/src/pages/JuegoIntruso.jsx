import { useState } from "react";
import { Alert, Button, Card, Container } from "react-bootstrap";
import { intrusoRondas } from "../data/preguntasIntruso";
import { PUNTOS_POR_ACIERTO } from "../services/JuegoService";
import { useNavigate } from "react-router-dom";
import { useJuego } from "../hooks/useJuego.js";

export const JuegoIntruso = () => {
  const navigate = useNavigate();
  const { terminarIntruso } = useJuego();

  const [rondaActual, setRondaActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [respuesta, setRespuesta] = useState(null); // { acerto }

  const ronda = intrusoRondas[rondaActual];
  const esUltima = rondaActual + 1 === intrusoRondas.length;

  const seleccionarAnimal = (animal) => {
    if (respuesta) return;
    const acerto = animal.esIntruso;
    if (acerto) setPuntaje((prev) => prev + PUNTOS_POR_ACIERTO);
    setRespuesta({ acerto });
  
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
  return (
    <Container className="text-center mt-4">
      <h2>Juego 2: El Intruso de la Granja</h2>
      <p className="lead">Ronda {rondaActual + 1} de {intrusoRondas.length}</p>
      <p><strong>Puntaje acumulado:</strong> {puntaje} puntos</p>

      <div className="alert alert-info fs-5">
        ¡Un animal se metió a la granja, pero no pertenece ahí! Sacá al INTRUSO.
      </div>

      <div className="d-flex justify-content-center gap-3 my-4 flex-wrap">
        {ronda.animal.map((animal) => (
          <Card
            key={animal.nombre}
            style={{ width: "12rem", cursor: respuesta ? "default" : "pointer" }}
            className="shadow border-2"
            onClick={() => seleccionarAnimal(animal)}
          >
            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
              <h3 className="card-title text-capitalize fs-3">{animal.nombre}</h3>
            </Card.Body>
          </Card>
        ))}
      </div>

      {respuesta && (
        <Alert variant={respuesta.acerto ? "success" : "danger"} className="fs-5">
          {respuesta.acerto ? ronda.avisoExito : ronda.avisoFallo}
        </Alert>
      )}

      {respuesta && (
        <Button variant="primary" size="lg" onClick={siguienteRonda}>
          {esUltima ? "Ver Resultados 🏆" : "Siguiente Ronda ➔"}
        </Button>
      )}
    </Container>
  );
};

export default JuegoIntruso;