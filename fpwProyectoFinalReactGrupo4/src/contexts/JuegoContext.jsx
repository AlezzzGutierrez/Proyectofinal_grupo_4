import { createContext, useState } from "react";

// Creo el contexto para poder compartir los datos entre componentes
export const JuegoContext = createContext(null);

// Creo el Provider para envolver los componentes que necesitan acceder a los datos del contexto
export const JuegoProvider = ({ children }) => {

    // Estados que almacenan los datos del jugador y sus puntajes
    const [nombreJugador, setNombreJugador] = useState("");
    const [puntajeComida, setPuntajeComida] = useState(0);
    const [puntajeIntruso, setPuntajeIntruso] = useState(0);

    // Función para comenzar el juego: guarda el nombre ingresado y reinicia los puntajes anteriores
    const comenzar = (nombreIngresado) => {
        setNombreJugador(nombreIngresado.trim());
        setPuntajeComida(0);
        setPuntajeIntruso(0);
    };

    // Función para finalizar el primer juego: recibe y guarda el puntaje obtenido en comida/animales
    const terminarComida = (puntos) => {
        setPuntajeComida(puntos);
    };

    // Función para finalizar el segundo juego: recibe y guarda el puntaje obtenido en el juego del intruso
    const terminarIntruso = (puntos) => {
        setPuntajeIntruso(puntos);
    };

    // Función para reiniciar el juego: limpia el nombre del jugador y ambos puntajes
    const reiniciarJuego = () => {
        setNombreJugador("");
        setPuntajeComida(0);
        setPuntajeIntruso(0);
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

    // Retorno el provider con los datos y funciones compartidos
    return (
        <JuegoContext.Provider value={valor}>
            {children}
        </JuegoContext.Provider>
    );
};
