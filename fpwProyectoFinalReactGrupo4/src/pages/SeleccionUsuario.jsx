import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/SeleccionUsuario.css";

export const SeleccionUsuario = () => {
  const navigate = useNavigate();

  const elegirUsuario = (tipo) => {
    navigate(tipo === "docente" ? "/login-docente" : "/login-nino");
  };

  return (
    <div className="seleccion-wrapper d-flex align-items-center">
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
  );
};

export default SeleccionUsuario;