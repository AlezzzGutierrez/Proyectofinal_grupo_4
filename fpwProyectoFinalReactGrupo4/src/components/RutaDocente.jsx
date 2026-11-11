import { Navigate } from "react-router-dom";
import { useAuthorization } from "../hooks/useAuthorization";

// Protege una ruta: solo deja pasar si hay una sesión de docente
const RutaDocente = ({ children }) => {
    const { sessionUser } = useAuthorization();

    if (sessionUser?.role !== "docente") {
        return <Navigate to="/docente" replace />;
    }

    return children;
};

export default RutaDocente;
