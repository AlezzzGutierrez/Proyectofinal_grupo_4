import {  useContext } from "react";
import { JuegoContext } from "../contexts/JuegoContext";

//hook personalizado para poder acceder a los datos del contexto
const useJuego = () => { 
    const contexto = useContext(JuegoContext);
//si el contexto es nulo, significa que el hook se está usando fuera del provider
    if (!contexto) {
        throw new Error("useJuego debe ser usado dentro de un JuegoProvider");
    }
    return contexto;
};