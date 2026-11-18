import { createContext, useState } from "react";
import resultadosService from "../services/resultadosService";

// Creo el contexto para poder compartir los datos entre componentes
export const JuegoContext = createContext(null);

// Claves de localStorage donde se guardan los puntajes (la pantalla Resultados las lee)
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

    // Función para comenzar el juego (usada por los niños)
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

        // 1. Intentamos obtener los datos del sessionStorage (si el docente usó el botón "Jugar")
        let nombreFinal = sessionStorage.getItem("jugadorActualNombre");
        let rolFinal = sessionStorage.getItem("jugadorActualRol");

        // 2. Si no hay nada en sessionStorage, usamos el nombre del estado (niño que jugó rápido)
        if (!nombreFinal && nombreJugador) {
            nombreFinal = nombreJugador;
            rolFinal = "nino";
        }

        // 3. Si todavía no hay nombre, buscamos en la sesión de AuthorizationContext 
        // (Ojo: el authService guarda el usuario, pero para no complicarla, usamos un respaldo)
        if (!nombreFinal) {
            try {
                // Acá asumimos que el authService guarda en alguna clave, o usamos un genérico
                const storedUser = localStorage.getItem("usuariosRegistrados"); // O donde guardes la sesión activa
                // ... (Si tienen el usuario logueado en otro lado, lo ideal es usar el hook useAuthorization acá, 
                // pero como los contextos están separados, usamos el sessionStorage que llenamos antes)
                nombreFinal = "Jugador Anónimo"; 
                rolFinal = "nino";
            } catch {
                nombreFinal = "Jugador Anónimo";
                rolFinal = "nino";
            }
        }

        // Guarda la partida completa con el ROL
        resultadosService.guardar({
            nombre: nombreFinal,
            rol: rolFinal || "nino", // <-- Le pasamos el rol al servicio
            puntajeComida: Number(localStorage.getItem(CLAVE_PUNTAJE_COMIDA)) || 0,
            puntajeIntruso: puntos
        });

        // Limpiamos el sessionStorage para que no quede sucio para la próxima partida
        sessionStorage.removeItem("jugadorActualNombre");
        sessionStorage.removeItem("jugadorActualRol");
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