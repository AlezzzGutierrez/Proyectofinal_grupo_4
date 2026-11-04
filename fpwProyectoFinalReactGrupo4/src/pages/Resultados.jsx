import { Alert, Button, Container, ListGroup } from "react-bootstrap";
import { useJuego } from "../hooks/useJuego.js";
import { mensajeFelicitacion } from "../services/JuegoService";

export const Resultados = () => {
  const { nombre, puntajeComida, puntajeIntruso, puntajeTotal, reiniciar } = useJuego();

  return (
    <Container className="text-center mt-4" style={{ maxWidth: "560px" }}>
      <h2 className="mb-4">¡Resultados de {nombre}!</h2>

      <ListGroup className="mb-4 fs-5">
        <ListGroup.Item className="d-flex justify-content-between">
          <span>Juego 1: ¡Hora de Comer!</span>
          <strong>{puntajeComida} / 50</strong>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex justify-content-between">
          <span>Juego 2: El Intruso</span>
          <strong>{puntajeIntruso} / 50</strong>
        </ListGroup.Item>
        <ListGroup.Item active className="d-flex justify-content-between fs-4">
          <span>Puntaje total</span>
          <strong>{puntajeTotal} / 100</strong>
        </ListGroup.Item>
      </ListGroup>

      <Alert variant="success" className="fs-5">
        {mensajeFelicitacion(nombre, puntajeTotal)}
      </Alert>

      <Button variant="primary" size="lg" onClick={reiniciar}>
        Jugar de nuevo
      </Button>
    </Container>
  );
};

export default Resultados;
