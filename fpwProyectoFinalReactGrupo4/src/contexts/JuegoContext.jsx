import { createContext, useState } from "react";
import resultadosService from "../services/resultadosService";

// Creo el contexto para poder compartir los datos entre componentes
export const JuegoContext = createContext(null);

// Claves de localStorage donde se guardan los puntajes (la pantalla Resultados las lee)
const CLAVE_PUNTAJE_COMIDA = "puntajeJuego1";
const CLAVE_PUNTAJE_INTRUSO = "puntajeJuego2";

// Creo el Provider para envolver los componentes que necesitan acceder a los datos del contexto
export const JuegoProvider = ({ children }) => {

    // Estados que almacenan los datos del jugador y sus puntajes
    const [nombreJugador, setNombreJugador] = useState("");
    const [puntajeComida, setPuntajeComida] = useState(0);
    const [puntajeIntruso, setPuntajeIntruso] = useState(0);

    // Borra los puntajes guardados de la partida anterior
    const borrarPuntajesGuardados = () => {
        localStorage.removeItem(CLAVE_PUNTAJE_COMIDA);
        localStorage.removeItem(CLAVE_PUNTAJE_INTRUSO);
    };

    // Función para comenzar el juego: guarda el nombre ingresado y reinicia los puntajes anteriores
    const comenzar = (nombreIngresado) => {
        setNombreJugador(nombreIngresado.trim());
        setPuntajeComida(0);
        setPuntajeIntruso(0);
        borrarPuntajesGuardados();
    };

    // Función para finalizar el primer juego: recibe y guarda el puntaje obtenido en comida/animales
    const terminarComida = (puntos) => {
        setPuntajeComida(puntos);
        localStorage.setItem(CLAVE_PUNTAJE_COMIDA, puntos);
    };

    // Función para finalizar el segundo juego: recibe y guarda el puntaje obtenido en el juego del intruso
    const terminarIntruso = (puntos) => {
        setPuntajeIntruso(puntos);
        localStorage.setItem(CLAVE_PUNTAJE_INTRUSO, puntos);

        // BUSCAMOS EL NOMBRE EN LA SESIÓN ACTUAL (LOGIN ÚNICO)
        const storedUser = localStorage.getItem("currentUser");
        const usuario = storedUser ? JSON.parse(storedUser) : null;
        
        // Usamos el nombre del estado, o el de la sesión, o "Sin nombre" como respaldo
        const nombreFinal = nombreJugador || usuario?.nombre || usuario?.name || "Sin nombre";

        // Guarda la partida completa para que el docente la vea en su panel
        resultadosService.guardar({
            nombre: nombreFinal,
            puntajeComida: Number(localStorage.getItem(CLAVE_PUNTAJE_COMIDA)) || 0,
            puntajeIntruso: puntos
        });
    };

    // Función para reiniciar el juego: limpia el nombre del jugador y ambos puntajes
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

    // Retorno el provider(estudiar) con los datos y funciones compartidos
    return (
        <JuegoContext.Provider value={valor}>
            {children}
        </JuegoContext.Provider>
    );
};   //verificar