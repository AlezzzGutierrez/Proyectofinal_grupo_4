import { useState } from "react";
import authService from "../services/authService";
import { useAuthorization } from "../hooks/useAuthorization";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const Login = () => {
    const [userName, setUserName] = useState("");
    const { saveSession } = useAuthorization();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();
        setError("");

        try {
            const sessionUser = await authService.login(userName);

            if (!sessionUser) {
                setError('¡Por favor ingresa tu nombre para empezar!');
                return;
            }

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
        />
    );
};

export default Login;