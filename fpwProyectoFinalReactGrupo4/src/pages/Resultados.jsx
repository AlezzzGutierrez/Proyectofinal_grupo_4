import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthorization } from "../hooks/useAuthorization";
import resultadosService from "../services/resultadosService";
import "../styles/Resultados.css";

const Resultados = () => {
    const navigate = useNavigate();
    const { clearSession } = useAuthorization();

    const [resultado] = useState(() => resultadosService.obtenerResultadoActual());

    const handlePlayAgain = () => {
        clearSession();
        navigate("/");
    };

    return (
        <div className="resultados-wrapper">
            <Container className="d-flex justify-content-center align-items-center py-4">
                <Card className="resultados-card text-center">
                    <Card.Body className="resultados-body">
                        <div className="trofeo-badge" aria-hidden="true">
                            🏆
                        </div>

                        <h2 className="titulo-resultados mb-3">¡Resultados Finales!</h2>

                        {resultado.nombre ? (
                            <p className="participante-texto mb-4">
                                Participante: <strong>{resultado.nombre}</strong>
                            </p>
                        ) : (
                            <p className="alerta-sesion mb-4">
                                No hay una sesión activa registrada.
                            </p>
                        )}

                        <div className="desglose-caja text-start mb-4">
                            <div className="desglose-fila mb-2">
                                <span>¡Hora de Comer!:</span>
                                <span className="puntaje-pill">{resultado.puntajeComida} pts</span>
                            </div>
                            <div className="desglose-fila mb-0">
                                <span>El intruso de la Granja:</span>
                                <span className="puntaje-pill">{resultado.puntajeIntruso} pts</span>
                            </div>
                        </div>

                        <h3 className="puntaje-total mb-3">
                            Puntaje Total: {resultado.total} pts
                        </h3>

                        <p className="mensaje-felicitacion mb-4">
                            {resultado.mensaje}
                        </p>

                        <Button className="boton-jugar-nuevo w-100" onClick={handlePlayAgain}>
                            Jugar de nuevo
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Resultados;