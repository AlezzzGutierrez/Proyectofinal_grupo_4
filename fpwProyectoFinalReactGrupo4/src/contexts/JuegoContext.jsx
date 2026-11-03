import { createContext, useState } from "react";

//creo el contexto para poder compartir los datos entre componentes
export const JuegoContext = createContext(null);
//creo el provider para poder envolver los componentes que necesitan acceder a los datos del contexto
const JuegoProvider = ({ children }) => {

    const [nombreJugador, setNombreJugador] = useState("");
    const [puntajeComida, setPuntajeComida] = useState(0);
    const [puntajeIntruso, setPuntajeIntruso] = useState(0);

};
//funciones para actualizar los datos del contexto
const guardarNombreJugador = (nombre) => {
    setNombreJugador(nombre);
};

const guardarPuntajeComida = (puntaje) => {
    setPuntajeComida(puntaje);
};

const guardarPuntajeIntruso = (puntaje) => {
    setPuntajeIntruso(puntaje);
};

//función para reiniciar el juego
const reiniciarJuego = () => {
    setNombreJugador("");
    setPuntajeComida(0);
    setPuntajeIntruso(0);
}
//retorno del provider con los datos y funciones que se van a compartir
return (
    <JuegoContext.Provider
        value={{
            nombreJugador,
            puntajeComida,
            puntajeIntruso,
            guardarNombreJugador,
            guardarPuntajeComida,
            guardarPuntajeIntruso,
            reiniciarJuego
        }}
    >
        {children}
    </JuegoContext.Provider>
);