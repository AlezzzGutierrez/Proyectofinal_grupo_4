import { useContext } from "react";
import { JuegoContext } from "../contexts/JuegoContext.jsx";

// Hook personalizado para acceder a los datos del contexto
export const useJuego = () => {

    // Obtiene los datos que proporciona JuegoContext
    const contexto = useContext(JuegoContext);

    
    if (!contexto) {
        throw new Error("useJuego debe ser usado dentro de un JuegoProvider");
    }

    // Devuelve los datos y funciones disponibles en el contexto
    return contexto;
};