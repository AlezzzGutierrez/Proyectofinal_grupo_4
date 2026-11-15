import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthorization } from "../hooks/useAuthorization";
import "../styles/Resultados.css";

const Resultados = () => {
    const navigate = useNavigate();
    const { clearSession } = useAuthorization();

    const storedUser = localStorage.getItem("currentUser");
    const currentUser = storedUser ? JSON.parse(storedUser) : null;

    const gameScore1 = Number(localStorage.getItem("puntajeJuego1")) || 0;
    const gameScore2 = Number(localStorage.getItem("puntajeJuego2")) || 0;
    const totalScore = gameScore1 + gameScore2;

    const getCongratulationMessage = (total) => {
        if (total >= 80) {
            return "¡Increíble trabajo! ¡Eres un verdadero experto de la granja!";
        } else if (total >= 50) {
            return "¡Muy bien hecho! Has completado los desafíos con gran esfuerzo.";
        } else {
            return "¡Buen intento! Sigue practicando para convertirte en el mejor granjero.";
        }
    };

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

                        {currentUser ? (
                            <p className="participante-texto mb-4">
                                Participante: <strong>{currentUser.name}</strong>
                            </p>
                        ) : (
                            <p className="alerta-sesion mb-4">
                                No hay una sesión activa registrada.
                            </p>
                        )}

                        <div className="desglose-caja text-start mb-4">
                            <div className="desglose-fila mb-2">
                                <span>¡Hora de Comer!:</span>
                                <span className="puntaje-pill">{gameScore1} pts</span>
                            </div>
                            <div className="desglose-fila mb-0">
                                <span>El intruso de la Granja:</span>
                                <span className="puntaje-pill">{gameScore2} pts</span>
                            </div>
                        </div>

                        <h3 className="puntaje-total mb-3">
                            Puntaje Total: {totalScore} pts
                        </h3>

                        <p className="mensaje-felicitacion mb-4">
                            {getCongratulationMessage(totalScore)}
                        </p>

                        <Button
                            className="boton-jugar-nuevo w-100"
                            onClick={handlePlayAgain}
                        >
                            Jugar de nuevo
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Resultados;