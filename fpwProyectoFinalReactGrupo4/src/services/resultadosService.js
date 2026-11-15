
const CLAVE = "resultados";

const leer = () => {
    try {
        const guardado = localStorage.getItem(CLAVE);
        return guardado ? JSON.parse(guardado) : [];
    } catch {
        return [];
    }
};

const nombreDeLaSesion = () => {
    try {
        const sesion = JSON.parse(localStorage.getItem("currentUser"));
        return sesion?.name || "Sin nombre";
    } catch {
        return "Sin nombre";
    }
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

    obtenerTodos: () => leer().sort((a, b) => new Date(b.fecha) - new Date(a.fecha)),

    borrarTodos: () => localStorage.removeItem(CLAVE)
};

export default resultadosService;
