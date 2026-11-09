import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthorization } from "../hooks/useAuthorization";

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
        <Container className="mt-4">
            <Card className="mx-auto text-center shadow" style={{ maxWidth: "500px" }}>
                <Card.Body className="p-4">
                    <h2 className="fw-bold text-success mb-3">¡Resultados Finales!</h2>

                    {currentUser ? (
                        <p className="fs-5 mb-4">
                            Participante: <strong>{currentUser.name}</strong>
                        </p>
                    ) : (
                        <p className="text-danger mb-4">
                            No hay una sesión activa registrada.
                        </p>
                    )}

                    <div className="text-start p-3 mb-4 rounded" style={{ backgroundColor: "#f1f8e9" }}>
                        <p className="mb-2">
                            ¡Hora de Comer!: <strong>{gameScore1} pts</strong>
                        </p>
                        <p className="mb-0">
                            El intruso de la Granja: <strong>{gameScore2} pts</strong>
                        </p>
                    </div>

                    <h3 className="fw-bold text-success mb-3">
                        Puntaje Total: {totalScore} pts
                    </h3>

                    <p className="fst-italic text-secondary mb-4">
                        {getCongratulationMessage(totalScore)}
                    </p>

                    <Button variant="success" size="lg" className="w-100" onClick={handlePlayAgain}>
                        Jugar de nuevo
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Resultados;
