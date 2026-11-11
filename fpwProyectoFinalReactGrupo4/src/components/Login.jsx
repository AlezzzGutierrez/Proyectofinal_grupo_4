import { useState } from "react";
import authService from "../services/authService";
import { validarNombre } from "../services/validacion";
import { useAuthorization } from "../hooks/useAuthorization";
import { useJuego } from "../hooks/useJuego.js";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const Login = () => {
    const [userName, setUserName] = useState("");
    const { saveSession } = useAuthorization();
    const { comenzar } = useJuego();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [enviado, setEnviado] = useState(false);

    // El error del campo aparece después del primer intento de envío
    const errorNombre = enviado ? validarNombre(userName) : "";

    const handleLogin = async (event) => {
        event.preventDefault();
        setError("");
        setEnviado(true);

        // Si el nombre no es válido, no se continúa
        if (validarNombre(userName)) {
            return;
        }

        try {
            const sessionUser = await authService.login(userName);

            if (!sessionUser) {
                setError('¡Por favor ingresa tu nombre para empezar!');
                return;
            }

            // Reinicia los puntajes para que no se mezclen con los del niño anterior
            comenzar(sessionUser.name);
            saveSession(sessionUser);
            navigate("/comida");
        } catch (err) {
            setError("No se ha podido iniciar sesión");
        }
    };

    return (
        <Form 
            userName={userName}
            setUserName={setUserName}
            onSubmit={handleLogin}
            error={error}
            errorNombre={errorNombre}
        />
    );
};

export default Login;
