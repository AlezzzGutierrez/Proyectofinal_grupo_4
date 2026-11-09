// Validaciones de los formularios. Cada una devuelve un mensaje de error,
// o un texto vacío ("") si el dato es válido.

const SOLO_LETRAS = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ ]+$/;

export const validarNombre = (nombre) => {
    const texto = nombre.trim();

    if (!texto) return "Ingresa tu nombre para empezar";
    if (texto.length < 2) return "El nombre debe tener al menos 2 letras";
    if (texto.length > 20) return "El nombre puede tener hasta 20 letras";
    if (!SOLO_LETRAS.test(texto)) return "Usa solo letras (sin números ni símbolos)";

    return "";
};

export const validarUsuario = (usuario) => {
    const texto = usuario.trim();

    if (!texto) return "Ingresa tu usuario";
    if (texto.length < 3) return "El usuario debe tener al menos 3 caracteres";
    if (/\s/.test(texto)) return "El usuario no puede tener espacios";

    return "";
};

export const validarClave = (clave) => {
    if (!clave) return "Ingresa tu contraseña";
    if (clave.length < 6) return "La contraseña debe tener al menos 6 caracteres";

    return "";
};
