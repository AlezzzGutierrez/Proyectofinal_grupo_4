import { createContext, useState } from "react";
import resultadosService from "../services/resultadosService";

export const JuegoContext = createContext(null);


const CLAVE_PUNTAJE_COMIDA = "puntajeJuego1";
const CLAVE_PUNTAJE_INTRUSO = "puntajeJuego2";

export const JuegoProvider = ({ children }) => {

    const [nombreJugador, setNombreJugador] = useState("");
    const [puntajeComida, setPuntajeComida] = useState(0);
    const [puntajeIntruso, setPuntajeIntruso] = useState(0);
    const borrarPuntajesGuardados = () => {
        localStorage.removeItem(CLAVE_PUNTAJE_COMIDA);
        localStorage.removeItem(CLAVE_PUNTAJE_INTRUSO);
    };

    const comenzar = (nombreIngresado) => {
        setNombreJugador(nombreIngresado.trim());
        setPuntajeComida(0);
        setPuntajeIntruso(0);
        borrarPuntajesGuardados();
    };

    const terminarComida = (puntos) => {
        setPuntajeComida(puntos);
        localStorage.setItem(CLAVE_PUNTAJE_COMIDA, puntos);
    };

    const terminarIntruso = (puntos) => {
        setPuntajeIntruso(puntos);
        localStorage.setItem(CLAVE_PUNTAJE_INTRUSO, puntos);

  
        const storedUser = localStorage.getItem("currentUser");
        const usuario = storedUser ? JSON.parse(storedUser) : null;
        const nombreFinal = nombreJugador || usuario?.nombre || usuario?.name || "Sin nombre";

        resultadosService.guardar({
            nombre: nombreFinal,
            puntajeComida: Number(localStorage.getItem(CLAVE_PUNTAJE_COMIDA)) || 0,
            puntajeIntruso: puntos
        });
    };

    const reiniciarJuego = () => {
        setNombreJugador("");
        setPuntajeComida(0);
        setPuntajeIntruso(0);
        borrarPuntajesGuardados();
    };

    const valor = {
        nombreJugador,
        puntajeComida,
        puntajeIntruso,
        puntajeTotal: puntajeComida + puntajeIntruso,
        comenzar,
        terminarComida,
        terminarIntruso,
        reiniciarJuego
    };

    return (
        <JuegoContext.Provider value={valor}>
            {children}
        </JuegoContext.Provider>
    );
}; 