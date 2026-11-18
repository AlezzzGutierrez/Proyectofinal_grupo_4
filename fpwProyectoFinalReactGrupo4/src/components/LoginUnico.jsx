import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Alert, Card } from "react-bootstrap";
import authService from "../services/authService";
import { useAuthorization } from "../hooks/useAuthorization";
import { validarNombre, validarClave } from "../services/validacion";
import { DOCENTE } from "../data/docentes";

const LoginUnico = () => {
    const [nombre, setNombre] = useState("");
    const [clave, setClave] = useState("");
    const [rol, setRol] = useState("nino"); 
    const [esRegistro, setEsRegistro] = useState(false); 
    const [error, setError] = useState("");
    const { saveSession } = useAuthorization();
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        // --- USANDO VALIDACION.JS ---
        const errorNombre = validarNombre(nombre);
        const errorClave = validarClave(clave);

        if (errorNombre || errorClave) {
            setError(errorNombre || errorClave);
            return;
        }

        // --- VALIDACIÓN CON DOCENTES.JS ---
        // Si el nombre que ponen es el del archivo docentes.js, 
        // verificamos que la clave coincida (para que no cualquiera se haga pasar por el admin).
        if (rol === "docente" && nombre.trim().toLowerCase() === DOCENTE.usuario.toLowerCase()) {
            if (clave !== DOCENTE.clave) {
                setError("La contraseña para el usuario 'docente' es incorrecta.");
                return;
            }
        }

        if (esRegistro) {
            // --- MODO REGISTRO ---
            const resultado = await authService.registrar(nombre, clave, rol);
            
            if (resultado.error) {
                setError(resultado.error);
            } else {
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
        <Container className="d-flex justify-content-center align-items-center mt-5">
            <Card className="p-4 shadow-sm" style={{ maxWidth: "450px", width: "100%" }}>
                <h2 className="text-center mb-4">🐄 La Granja Divertida 🐔</h2>
                <h4 className="text-center mb-4 text-primary">
                    {esRegistro ? "Crear una cuenta nueva" : "Iniciar Sesión"}
                </h4>
                
                <Form onSubmit={handleSubmit}>
                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Tu nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label className="fw-bold">Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Tu contraseña"
                            value={clave}
                            onChange={(e) => setClave(e.target.value)}
                        />
                    </Form.Group>

                    {esRegistro && (
                        <Form.Group className="mb-4">
                            <Form.Label className="fw-bold">¿Quién sos?</Form.Label>
                            <Form.Select value={rol} onChange={(e) => setRol(e.target.value)}>
                                <option value="nino">Soy Alumno / Niño</option>
                                <option value="docente">Soy Docente / Profesor</option>
                            </Form.Select>
                        </Form.Group>
                    )}

                    <Button variant="success" type="submit" size="lg" className="w-100 mb-3">
                        {esRegistro ? "Registrarme y Entrar" : "Ingresar"}
                    </Button>

                    <div className="text-center">
                        <Button 
                            variant="link" 
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
        </Container>
    );
};

export default LoginUnico;