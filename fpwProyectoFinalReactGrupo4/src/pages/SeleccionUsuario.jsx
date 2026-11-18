<<<<<<< HEAD
import { useState } from "react";
import { Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form"; // <-- Integramos el Form que estaba colgando
import { validarNombre } from "../services/validacion";
=======
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/SeleccionUsuario.css";
>>>>>>> db0f66ad4977cda6d8202d81e541273f99303bd8

export const SeleccionUsuario = () => {
  const navigate = useNavigate();
  const [nombreRapido, setNombreRapido] = useState("");
  const [errorNombre, setErrorNombre] = useState("");

  const elegirUsuario = (tipo) => {
    navigate(tipo === "docente" ? "/login-docente" : "/login-nino");
  };

  // Función para cuando el niño usa el Form rápido
  const handleJuegoRapido = (e) => {
    e.preventDefault();
    const error = validarNombre(nombreRapido);
    if (error) {
      setErrorNombre(error);
      return;
    }
    // Guardamos el nombre en el sessionStorage o pasamos por URL si el juego lo necesita
    sessionStorage.setItem("nombreNino", nombreRapido);
    navigate("/comida"); // Lo mandamos directo al juego
  };

  return (
<<<<<<< HEAD
    <Container className="text-center mt-5">
      <h2>¡Bienvenido a la Granja!</h2>
      <p className="lead">¿Quién va a usar la aplicación?</p>

      <div className="d-flex justify-content-center gap-4 my-4 flex-wrap">
        <Button variant="primary" size="lg" onClick={() => elegirUsuario("nino")}>
          <span aria-hidden="true">🧒</span> Soy niño (con cuenta)
        </Button>

        <Button variant="success" size="lg" onClick={() => elegirUsuario("docente")}>
          <span aria-hidden="true">👩‍🏫</span> Soy docente
        </Button>
      </div>

      <hr className="my-5" />

      {/* AQUÍ INTEGRAMOS EL FORM.JSX PARA ACCESO RÁPIDO */}
      <Card className="mx-auto shadow-sm" style={{ maxWidth: "400px" }}>
        <Card.Body>
          <h5 className="text-muted mb-3">O jugá rápido sin cuenta</h5>
          <Form 
            userName={nombreRapido} 
            setUserName={setNombreRapido} 
            onSubmit={handleJuegoRapido} 
            errorNombre={errorNombre}
            // Quitamos la prop de error general porque no la usamos acá
          />
        </Card.Body>
      </Card>
    </Container>
=======
    <div className="seleccion-wrapper">
      <Container fluid className="d-flex justify-content-center align-items-center py-4">
        <div className="seleccion-card text-center">
          <h2 className="seleccion-titulo">¡Bienvenido a La Granja!</h2>
          <p className="seleccion-subtitulo">¿Quién va a usar la aplicación?</p>

          <div className="opciones-rol-contenedor">
            <button
              type="button"
              className="boton-rol boton-nino"
              onClick={() => elegirUsuario("nino")}
            >
              <span className="rol-emoji" aria-hidden="true">🧒</span>
              <span className="rol-texto">Soy niño</span>
            </button>

            <button
              type="button"
              className="boton-rol boton-docente"
              onClick={() => elegirUsuario("docente")}
            >
              <span className="rol-emoji" aria-hidden="true">👩‍🏫</span>
              <span className="rol-texto">Soy docente</span>
            </button>
          </div>
        </div>
      </Container>
    </div>
>>>>>>> db0f66ad4977cda6d8202d81e541273f99303bd8
  );
};

export default SeleccionUsuario;