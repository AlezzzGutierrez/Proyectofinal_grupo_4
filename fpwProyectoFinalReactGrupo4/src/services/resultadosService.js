// Guarda y lee los resultados de los niños en el navegador (localStorage).
// Solo se ven en la misma computadora y navegador donde se jugó.

const CLAVE = "resultados";

const leer = () => {
    try {
        const guardado = localStorage.getItem(CLAVE);
        return guardado ? JSON.parse(guardado) : [];
    } catch {
        return [];
    }
};

// Si no se pasa el nombre, se toma el de la sesión del niño
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

    // Los más recientes primero
    obtenerTodos: () => leer().sort((a, b) => new Date(b.fecha) - new Date(a.fecha)),

    borrarTodos: () => localStorage.removeItem(CLAVE)
};

export default resultadosService;
