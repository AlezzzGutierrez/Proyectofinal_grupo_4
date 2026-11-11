import { DOCENTE } from "../data/docentes";

const authService = (() => {
    let idCount = 1;

    // Acceso de los niños: solo necesitan un nombre
    const login = async (playerName) => {
        if (!playerName || playerName.trim() === "") {
            return null;
        }

        const user = {
            id: idCount,
            name: playerName.trim(),
            role: "nino"
        };

        idCount++;
        return user;
    };

    // Acceso del docente: usuario y contraseña
    const loginDocente = async (usuario, clave) => {
        if (usuario.trim() !== DOCENTE.usuario || clave !== DOCENTE.clave) {
            return null;
        }

        return {
            id: 0,
            name: "Docente",
            role: "docente"
        };
    };

    return ({
        login,
        loginDocente
    });
})();

export default authService;
