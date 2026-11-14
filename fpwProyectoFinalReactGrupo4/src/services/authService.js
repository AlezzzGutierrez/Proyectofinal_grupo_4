const CLAVE_USUARIOS = "usuariosRegistrados";

const obtenerUsuarios = () => {
    const guardados = localStorage.getItem(CLAVE_USUARIOS);
    return guardados ? JSON.parse(guardados) : [];
};

const guardarUsuarios = (usuarios) => {
    localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(usuarios));
};

const authService = {
    registrar: async (nombre, clave, rol) => {
        const usuarios = obtenerUsuarios();
        const existe = usuarios.find(u => u.nombre.toLowerCase() === nombre.trim().toLowerCase());
        if (existe) return { error: "Ese nombre ya está registrado." };

        const nuevoUsuario = {
            id: Date.now(),
            nombre: nombre.trim(),
            clave: clave, 
            rol: rol // <--- ACÁ SE GUARDA EL ROL
        };
        usuarios.push(nuevoUsuario);
        guardarUsuarios(usuarios);

        const { clave: _, ...usuarioSeguro } = nuevoUsuario;
        return { usuario: usuarioSeguro };
    },

    login: async (nombre, clave) => {
        const usuarios = obtenerUsuarios();
        const usuarioEncontrado = usuarios.find(
            u => u.nombre.toLowerCase() === nombre.trim().toLowerCase() && u.clave === clave
        );
        if (!usuarioEncontrado) return null;

        const { clave: _, ...usuarioSeguro } = usuarioEncontrado;
        return usuarioSeguro;
    }
};

export default authService;