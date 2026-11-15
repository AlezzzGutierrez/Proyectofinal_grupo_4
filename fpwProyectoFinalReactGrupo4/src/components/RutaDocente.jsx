
import { Navigate } from "react-router-dom";
import { useAuthorization } from "../hooks/useAuthorization";

const RutaDocente = ({ children }) => {
    const { sessionUser } = useAuthorization();
    
    console.log("1. Guardián revisando... sessionUser:", sessionUser);

    if (sessionUser === null) {
        console.log("2. Usuario es NULL, esperando...");
        return null; 
    }

    const esDocente = sessionUser.role === "docente" || sessionUser.rol === "docente";
    console.log("3. ¿Es docente?:", esDocente);

    if (!esDocente) {
        console.log("4. NO es docente. Pateando al login.");
        return <Navigate to="/login-docente" replace />;
    }

    console.log("5. ¡ES DOCENTE! Entrando al panel.");
    return children;
};

export default RutaDocente;