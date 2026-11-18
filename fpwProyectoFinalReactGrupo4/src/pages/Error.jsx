import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/SeleccionUsuario.css";

const Error = () => {
    return (
        <div className="seleccion-wrapper d-flex align-items-center">
            <Container fluid className="d-flex justify-content-center align-items-center py-4">
                <div className="seleccion-card text-center" style={{ maxWidth: "680px" }}>
                    <div style={{ fontSize: "80px", lineHeight: 1 }} className="mb-3">
                        🐮❓
                    </div>
                    <h2 className="seleccion-titulo" style={{ fontSize: "44px" }}>
                        ¡Ups! Te perdiste en la granja
                    </h2>
                    <p className="seleccion-subtitulo mb-4" style={{ fontSize: "20px" }}>
                        La página que estás buscando no existe o fue movida.
                    </p>

                    <Button
                        as={Link}
                        to="/"
                        className="boton-rol boton-nino mx-auto"
                        style={{ minHeight: "auto", minWidth: "240px", padding: "16px 32px" }}
                    >
                        <span className="rol-texto" style={{ fontSize: "24px" }}>
                            Volver al Inicio 🏡
                        </span>
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default Error;