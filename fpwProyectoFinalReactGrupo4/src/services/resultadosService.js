const CLAVE = "resultados";
const CLAVE_PUNTAJE_COMIDA = "puntajeJuego1";
const CLAVE_PUNTAJE_INTRUSO = "puntajeJuego2";

const leer = () => {
    try {
        const guardado = localStorage.getItem(CLAVE);
        return guardado ? JSON.parse(guardado) : [];
    } catch {
        return [];
    }
};

const leerSesion = () => {
    try {
        return JSON.parse(localStorage.getItem("currentUser"));
    } catch {
        return null;
    }
};

const leerPuntaje = (clave) => Number(localStorage.getItem(clave)) || 0;

const nombreDeLaSesion = () => leerSesion()?.nombre || "Sin nombre";

const mensajeFinal = (total) => {
    if (total >= 80) return "¡Increíble trabajo! ¡Eres un verdadero experto de la granja!";
    if (total >= 50) return "¡Muy bien hecho! Has completado los desafíos con gran esfuerzo.";
    return "¡Buen intento! Sigue practicando para convertirte en el mejor granjero.";
};

const resultadosService = {
    guardar: ({ nombre, puntajeComida, puntajeIntruso }) => {
        const resultados = leer();

        resultados.push({
            nombre: nombre || nombreDeLaSesion(),
            puntajeComida,
            puntajeIntruso,
            total: puntajeComida + puntajeIntruso,
            fecha: new Date().toISOString()
        });

        localStorage.setItem(CLAVE, JSON.stringify(resultados));
    },

    obtenerResultadoActual: () => {
        const puntajeComida = leerPuntaje(CLAVE_PUNTAJE_COMIDA);
        const puntajeIntruso = leerPuntaje(CLAVE_PUNTAJE_INTRUSO);
        const total = puntajeComida + puntajeIntruso;

        return {
            nombre: leerSesion()?.nombre || null,
            puntajeComida,
            puntajeIntruso,
            total,
            mensaje: mensajeFinal(total)
        };
    },

    obtenerTodos: () => leer().sort((a, b) => new Date(b.fecha) - new Date(a.fecha)),

    borrarTodos: () => localStorage.removeItem(CLAVE)
};

export default resultadosService;