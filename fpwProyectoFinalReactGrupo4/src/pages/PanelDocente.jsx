import { useState } from "react";
import { Alert, Button, Container, Table, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import resultadosService from "../services/resultadosService";
import { useAuthorization } from "../hooks/useAuthorization";

const PanelDocente = () => {
    const [resultados, setResultados] = useState(() => resultadosService.obtenerTodos());
    const navigate = useNavigate();
    const { sessionUser } = useAuthorization(); 

    const promedio = resultados.length
        ? Math.round(resultados.reduce((suma, resultado) => suma + resultado.total, 0) / resultados.length)
        : 0;

    const formatoFecha = (fechaIso) =>
        new Date(fechaIso).toLocaleString("es-AR", { dateStyle: "short", timeStyle: "short" });

    const actualizar = () => setResultados(resultadosService.obtenerTodos());

    const borrar = () => {
        if (window.confirm("¿Seguro que deseas borrar todos los resultados?")) {
            resultadosService.borrarTodos();
            setResultados([]);
        }
    };

    // Función para que el docente juegue
    const jugarComoDocente = () => {
        sessionStorage.setItem("jugadorActualNombre", sessionUser?.nombre || "Docente");
        sessionStorage.setItem("jugadorActualRol", "docente");
        navigate("/comida");
    };

    return (
        <Container className="mt-4" style={{ maxWidth: "900px" }}>
            <h2 className="fw-bold text-primary fs-4 mb-3">Panel del Docente</h2>

            <div className="d-flex gap-2 flex-wrap mb-3 align-items-center">
                <Button variant="outline-primary" onClick={actualizar}>
                    Actualizar
                </Button>
                <Button variant="outline-danger" onClick={borrar} disabled={!resultados.length}>
                    Borrar resultados
                </Button>
                
                {/* BOTÓN PARA JUGAR */}
                <Button variant="success" onClick={jugarComoDocente} className="ms-auto">
                    🎮 Jugar una partida (Modo Docente)
                </Button>
            </div>

            {resultados.length === 0 ? (
                <Alert variant="info">Todavía no hay resultados guardados.</Alert>
            ) : (
                <>
                    <p>
                        Partidas jugadas: <strong>{resultados.length}</strong> · Promedio: <strong>{promedio} / 100</strong>
                    </p>

                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Rol</th>
                                <th className="text-center">¡Hora de Comer!</th>
                                <th className="text-center">El Intruso</th>
                                <th className="text-center">Total</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultados.map((resultado, index) => (
                                <tr key={index}>
                                    <td>{resultado.nombre}</td>
                                    <td>
                                        <Badge bg={resultado.rol === "docente" ? "warning" : "info"} text="dark">
                                            {resultado.rol === "docente" ? "Docente" : "Niño"}
                                        </Badge>
                                    </td>
                                    <td className="text-center">{resultado.puntajeComida} / 50</td>
                                    <td className="text-center">{resultado.puntajeIntruso} / 50</td>
                                    <td className="text-center"><strong>{resultado.total} / 100</strong></td>
                                    <td>{formatoFecha(resultado.fecha)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            )}
        </Container>
    );
};

export default PanelDocente;