const CLAVE = "resultados";

const leer = () => {
    try {
        const guardado = localStorage.getItem(CLAVE);
        return guardado ? JSON.parse(guardado) : [];
    } catch {
        return [];
    }
};

const resultadosService = {
    // Ahora recibimos también el 'rol' (nino o docente)
    guardar: ({ nombre, rol, puntajeComida, puntajeIntruso }) => {
        const resultados = leer();

        resultados.push({
            nombre: nombre || "Sin nombre",
            rol: rol || "nino", // Por defecto asumimos que es niño
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
