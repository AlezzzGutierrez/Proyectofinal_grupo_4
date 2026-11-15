import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import { useAuthorization } from "../hooks/useAuthorization";
import "../styles/Login.css";
import { Button, Container, Form, Alert, Card, Row, Col } from "react-bootstrap";

const LoginUnico = () => {
    const [nombre, setNombre] = useState("");
    const [clave, setClave] = useState("");
    const [rol, setRol] = useState("nino"); // "nino" o "docente"
    const [esRegistro, setEsRegistro] = useState(false); // Controla si estamos creando cuenta o iniciando sesión

    const [error, setError] = useState("");
    const { saveSession } = useAuthorization();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        if (!nombre.trim() || !clave.trim()) {
            setError("¡Por favor, completa todos los campos!");
            return;
        }

        if (esRegistro) {
            // --- MODO REGISTRO ---
            const resultado = await authService.registrar(nombre, clave, rol);

            if (resultado.error) {
                setError(resultado.error);
            } else {
                // Si se registró bien, iniciamos sesión automáticamente
                saveSession(resultado.usuario);
                navigate(resultado.usuario.rol === "docente" ? "/panel" : "/comida");
            }
        } else {
            // --- MODO INICIO DE SESIÓN ---
            const usuario = await authService.login(nombre, clave);

            if (usuario) {
                saveSession(usuario);
                navigate(usuario.rol === "docente" ? "/panel" : "/comida");
            } else {
                setError("Usuario o contraseña incorrectos.");
            }
        }
    };

    return (
        <Container fluid className="login-container">
            <Row className="align-items-center">

                <Col md={6} className="login-presentacion">
    <div className="presentacion-contenido p-5 rounded-5">
        <div className="presentacion-texto">
            <h1 className="display-5 fw-bold titulo-bienvenida">
                ¡Bienvenido a La Granja Divertida!
            </h1>

            <p className="fs-4 mt-3">
                El lugar ideal para que los más pequeños aprendan jugando junto a los animalitos de la granja,
                 con actividades simples, coloridas y diseñadas especialmente para su edad.
            </p>
        </div>

        {/* Nubes blancas sólidas en la parte inferior */}
        <div className="nubes-inferiores">
            <svg viewBox="0 0 800 110" preserveAspectRatio="none" className="nubes-svg">
                <path
                    d="M0,110 L0,80 Q60,42 125,72 Q190,26 270,68 Q350,20 435,66 Q520,24 600,68 Q680,32 750,72 Q780,55 800,75 L800,110 Z"
                    fill="#FFFFFF"
                />
            </svg>
        </div>
    </div>
</Col>

                {/* Columna derecha: formulario */}
                <Col md={6} className="login-formulario">
                    <Card className="login-card p-4">

                        <h4 className="titulo-login mb-4 text-center">
                            {esRegistro ? "Crear una cuenta nueva" : "Iniciar Sesión"}
                        </h4>

                        <Form onSubmit={handleSubmit}>
                            {error && (
                                <Alert variant="danger" className="rounded-4 py-2 text-center fs-6">
                                    {error}
                                </Alert>
                            )}

                            <Form.Group className="mb-4">
                                <Form.Label className="fw-bold">Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Tu nombre"
                                    className="input-linea"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label className="fw-bold">Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Tu contraseña"
                                    className="input-linea"
                                    value={clave}
                                    onChange={(e) => setClave(e.target.value)}
                                />
                            </Form.Group>

                            {/* Si estamos en modo Registro, mostramos la opción de elegir el rol */}
                            {esRegistro && (
                                <Form.Group className="mb-4">
                                    <Form.Label className="fw-bold">¿Quién sos?</Form.Label>
                                    <Form.Select
                                        className="select-linea"
                                        value={rol}
                                        onChange={(e) => setRol(e.target.value)}
                                    >
                                        <option value="nino">Soy Alumno / Niño</option>
                                        <option value="docente">Soy Docente / Profesor</option>
                                    </Form.Select>
                                </Form.Group>
                            )}

                            <div className="text-center mt-4">
                                <Button
                                    type="submit"
                                    className="boton-ingresar mb-3"
                                >
                                    {esRegistro ? "Registrarme y Entrar" : "Ingresar"}
                                </Button>
                            </div>

                            {/* Botón para alternar entre Login y Registro */}
                            <div className="text-center">
                                <Button
                                    variant="link"
                                    className="boton-alternar"
                                    onClick={() => {
                                        setEsRegistro(!esRegistro);
                                        setError("");
                                    }}
                                >
                                    {esRegistro ? "¿Ya tenés cuenta? Iniciá sesión acá" : "¿No tenés cuenta? Creá una acá"}
                                </Button>
                            </div>
                        </Form>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
};

export default LoginUnico;