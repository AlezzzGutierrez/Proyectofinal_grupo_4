import { Navigate } from "react-router-dom";
import { useAuthorization } from "../hooks/useAuthorization";

const RutaDocente = ({ children }) => {
    const { sessionUser } = useAuthorization();

    // Si todavía no cargó (o no hay sesión), lo mandamos al login
    if (!sessionUser) {
        return <Navigate to="/login-docente" replace />;
    }

    // Verificamos que sea docente (usando "rol" como está en tu authService)
    const esDocente = sessionUser.rol === "docente";

    if (!esDocente) {
        return <Navigate to="/login-docente" replace />;
    }

    // Si es docente, lo dejamos pasar
    return children;
};

export default RutaDocente;