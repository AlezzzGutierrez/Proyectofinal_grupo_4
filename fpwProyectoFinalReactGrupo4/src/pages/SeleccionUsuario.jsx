import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const SeleccionUsuario = () => {

  const navigate = useNavigate();

 
  const elegirUsuario = (tipo) => {
     navigate(tipo === "docente" ? "/login-docente" : "/login-nino");
  };

  return (
    <Container className="text-center mt-5">
      <h2>¡Bienvenido!</h2>
      <p className="lead">¿Quién va a usar la aplicación?</p>

      <div className="d-flex justify-content-center gap-4 my-4 flex-wrap">
        <Button
          variant="primary"
          size="lg"
          onClick={() => elegirUsuario("nino")}
        >
          <span aria-hidden="true">🧒</span> Soy niño
        </Button>

        <Button
          variant="success"
          size="lg"
          onClick={() => elegirUsuario("docente")}
        >
          <span aria-hidden="true">👩‍🏫</span> Soy docente
        </Button>
      </div>
    </Container>
  );
};

export default SeleccionUsuario;