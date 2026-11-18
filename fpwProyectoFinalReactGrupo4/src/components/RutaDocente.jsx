import { Navigate } from "react-router-dom";
import { useAuthorization } from "../hooks/useAuthorization";

const RutaDocente = ({ children }) => {
    const { sessionUser } = useAuthorization();

    const storedUser = localStorage.getItem("currentUser");
    const usuarioReal = storedUser ? JSON.parse(storedUser) : null;
    const usuario = sessionUser || usuarioReal;

    if (!usuario) {
        return <Navigate to="/login-docente" replace />;
    }

    if (usuario.rol !== "docente") {
        return <Navigate to="/comida" replace />;
    }

    return children;
};

export default RutaDocente;