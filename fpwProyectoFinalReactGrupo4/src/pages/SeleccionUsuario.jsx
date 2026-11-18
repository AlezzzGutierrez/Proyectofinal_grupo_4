import { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { validarNombre } from "../services/validacion";
import "../styles/SeleccionUsuario.css";

export const SeleccionUsuario = () => {
  const navigate = useNavigate();
  const [nombreRapido, setNombreRapido] = useState("");
  const [errorNombre, setErrorNombre] = useState("");

  const elegirUsuario = (tipo) => {
    navigate(tipo === "docente" ? "/login-docente" : "/login-nino");
  };

  const handleJuegoRapido = (e) => {
    e.preventDefault();
    const error = validarNombre(nombreRapido);
    if (error) {
      setErrorNombre(error);
      return;
    }
    sessionStorage.setItem("nombreNino", nombreRapido);
    navigate("/comida");
  };

  return (
    <div className="seleccion-wrapper">
      <Container fluid className="d-flex flex-column justify-content-center align-items-center py-4">
        <div className="seleccion-card text-center mb-4">
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

        <Card className="mx-auto shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
          <Card.Body>
            <h5 className="text-muted mb-3 text-center">O jugá rápido sin cuenta</h5>
            <Form 
              userName={nombreRapido} 
              setUserName={setNombreRapido} 
              onSubmit={handleJuegoRapido} 
              errorNombre={errorNombre}
            />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default SeleccionUsuario;