import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useJuego } from "../hooks/useJuego.js";

export const Inicio = () => {
  const { comenzar } = useJuego();
  const [nombre, setNombre] = useState("");

  const enviar = (evento) => {
    evento.preventDefault();
    if (nombre.trim()) comenzar(nombre);
  };

  return (
    <Container className="text-center mt-4" style={{ maxWidth: "480px" }}>
      <h1 className="mb-4">🐄 La Granja Divertida 🐔</h1>
      <Form onSubmit={enviar}>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label className="fs-5">¿Cómo te llamás?</Form.Label>
          <Form.Control
            size="lg"
            className="text-center"
            type="text"
            maxLength={20}
            placeholder="Escribí tu nombre"
            autoComplete="off"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="success" size="lg" disabled={!nombre.trim()}>
          Comenzar
        </Button>
      </Form>
    </Container>
  );
};

export default Inicio;
