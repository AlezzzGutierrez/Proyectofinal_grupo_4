import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Container, Form } from "react-bootstrap";
import authService from "../services/authService";
import { useAuthorization } from "../hooks/useAuthorization";
import { validarUsuario, validarClave } from "../services/validacion";

const LoginDocente = () => {
    const [usuario, setUsuario] = useState("");
    const [clave, setClave] = useState("");
    const [error, setError] = useState("");
    const [enviado, setEnviado] = useState(false);
    const { saveSession } = useAuthorization();
    const navigate = useNavigate();

    // Los errores de cada campo aparecen después del primer intento de envío
    const errorUsuario = enviado ? validarUsuario(usuario) : "";
    const errorClave = enviado ? validarClave(clave) : "";

    const handleLogin = async (event) => {
        event.preventDefault();
        setError("");
        setEnviado(true);

        if (validarUsuario(usuario) || validarClave(clave)) {
            return;
        }

        try {
            const sessionUser = await authService.loginDocente(usuario, clave);

            if (!sessionUser) {
                setError("Usuario o contraseña incorrectos");
                return;
            }

            saveSession(sessionUser);
            navigate("/panel");
        } catch {
            setError("No se ha podido iniciar sesión");
        }
    };

    return (
        <Container className="mt-4 p-3" style={{ maxWidth: "400px" }}>
            <Form noValidate onSubmit={handleLogin} className="d-flex flex-column gap-3">
                <h2 className="text-center fw-bold text-primary fs-4">
                    Acceso para docentes
                </h2>

                {error && (
                    <Alert variant="danger" className="mb-0">
                        {error}
                    </Alert>
                )}

                <Form.Group controlId="usuario">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                        type="text"
                        value={usuario}
                        onChange={(event) => setUsuario(event.target.value)}
                        isInvalid={Boolean(errorUsuario)}
                        autoComplete="username"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errorUsuario}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="clave">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        value={clave}
                        onChange={(event) => setClave(event.target.value)}
                        isInvalid={Boolean(errorClave)}
                        autoComplete="current-password"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errorClave}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit" variant="primary" size="lg">
                    Ingresar
                </Button>
            </Form>
        </Container>
    );
};

export default LoginDocente;
