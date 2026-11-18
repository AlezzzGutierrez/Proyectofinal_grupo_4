import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthorization } from "../hooks/useAuthorization";
<<<<<<< HEAD
import { useJuego } from "../hooks/useJuego"; // Para limpiar los puntajes
import { mensajeFelicitacion } from "../services/JuegoService"; // El mensaje del profe
=======
import resultadosService from "../services/resultadosService";
import "../styles/Resultados.css";
>>>>>>> db0f66ad4977cda6d8202d81e541273f99303bd8

const Resultados = () => {
    const navigate = useNavigate();
    const { clearSession } = useAuthorization();
    const { reiniciarJuego } = useJuego(); // Traemos la función para limpiar

<<<<<<< HEAD
    const storedUser = localStorage.getItem("currentUser");
    const currentUser = storedUser ? JSON.parse(storedUser) : null;

    const gameScore1 = Number(localStorage.getItem("puntajeJuego1")) || 0;
    const gameScore2 = Number(localStorage.getItem("puntajeJuego2")) || 0;
    const totalScore = gameScore1 + gameScore2;

    // Usamos el nombre del usuario (o "amigo" por si acaso)
    const nombreParaMostrar = currentUser ? currentUser.name : "amigo";

    const handlePlayAgain = () => {
        clearSession(); // Borra la sesión (nombre y rol)
        reiniciarJuego(); // Borra los puntajes del localStorage
        navigate("/");  // Vuelve al inicio
=======
    const [resultado] = useState(() => resultadosService.obtenerResultadoActual());

    const handlePlayAgain = () => {
        clearSession();
        navigate("/");
>>>>>>> db0f66ad4977cda6d8202d81e541273f99303bd8
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

<<<<<<< HEAD
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
                        {/* Acá usamos la función que armaron en JuegoService */}
                        {mensajeFelicitacion(nombreParaMostrar, totalScore)}
                    </p>

                    <Button variant="success" size="lg" className="w-100" onClick={handlePlayAgain}>
                        Jugar de nuevo
                    </Button>
                </Card.Body>
            </Card>
        </Container>
=======
                        <Button className="boton-jugar-nuevo w-100" onClick={handlePlayAgain}>
                            Jugar de nuevo
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
>>>>>>> db0f66ad4977cda6d8202d81e541273f99303bd8
    );
};

export default Resultados;