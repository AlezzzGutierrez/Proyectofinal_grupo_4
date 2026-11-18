import { useState } from "react";
import { Alert, Button, Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import resultadosService from "../services/resultadosService";
import { useAuthorization } from "../hooks/useAuthorization";
import "../styles/PanelDocente.css";

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

    const jugarComoDocente = () => {
        sessionStorage.setItem("jugadorActualNombre", sessionUser?.nombre || "Docente");
        sessionStorage.setItem("jugadorActualRol", "docente");
        navigate("/comida");
    };

    return (
        <div className="panel-docente-wrapper">
            <Container fluid className="d-flex justify-content-center">
                <div className="panel-docente-card">
                    <h2 className="panel-titulo">Panel del Docente</h2>

                    <div className="d-flex gap-3 flex-wrap mb-4 align-items-center">
                        <Button className="btn-panel-pill btn-panel-blanco" onClick={actualizar}>
                            Actualizar
                        </Button>
                        <Button
                            className="btn-panel-pill btn-panel-rojo"
                            onClick={borrar}
                            disabled={!resultados.length}
                        >
                            Borrar resultados
                        </Button>

                        <Button
                            className="btn-panel-pill btn-panel-amarillo ms-auto"
                            onClick={jugarComoDocente}
                        >
                            🎮 Jugar una partida (Modo Docente)
                        </Button>
                    </div>

                    {resultados.length === 0 ? (
                        <Alert variant="light" className="rounded-4 fw-bold text-center border-0 shadow-sm">
                            Todavía no hay resultados guardados.
                        </Alert>
                    ) : (
                        <>
                            <div className="resumen-estadisticas-pill">
                                Partidas jugadas: {resultados.length} · Promedio: {promedio} / 100
                            </div>

                            <div className="tabla-resultados-contenedor">
                                <Table hover responsive className="tabla-granja">
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
                                                    <span
                                                        className={
                                                            resultado.rol === "docente"
                                                                ? "badge-rol-docente"
                                                                : "badge-rol-nino"
                                                        }
                                                    >
                                                        {resultado.rol === "docente" ? "Docente" : "Niño"}
                                                    </span>
                                                </td>
                                                <td className="text-center">{resultado.puntajeComida} / 50</td>
                                                <td className="text-center">{resultado.puntajeIntruso} / 50</td>
                                                <td className="text-center">
                                                    <strong>{resultado.total} / 100</strong>
                                                </td>
                                                <td>{formatoFecha(resultado.fecha)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default PanelDocente;